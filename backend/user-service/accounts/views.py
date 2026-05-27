from django.conf import settings
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import RegisterSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200 and isinstance(response.data, dict):
            refresh = response.data.get('refresh')
            if refresh:
                response.set_cookie(
                    settings.REFRESH_COOKIE_NAME,
                    refresh,
                    httponly=settings.REFRESH_COOKIE_HTTPONLY,
                    secure=settings.REFRESH_COOKIE_SECURE,
                    samesite=settings.REFRESH_COOKIE_SAMESITE,
                    path=settings.REFRESH_COOKIE_PATH,
                )
                response.data.pop('refresh', None)
        return response


class CustomTokenRefreshView(TokenRefreshView):
    serializer_class = TokenRefreshSerializer

    def post(self, request, *args, **kwargs):
        refresh = request.data.get('refresh') if isinstance(request.data, dict) else None
        if not refresh:
            refresh = request.COOKIES.get(settings.REFRESH_COOKIE_NAME)

        if not refresh:
            return Response({'detail': 'Refresh token missing.'}, status=status.HTTP_401_UNAUTHORIZED)

        serializer = self.get_serializer(data={'refresh': refresh})
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        response = Response(data, status=status.HTTP_200_OK)

        if 'refresh' in data:
            response.set_cookie(
                settings.REFRESH_COOKIE_NAME,
                data['refresh'],
                httponly=settings.REFRESH_COOKIE_HTTPONLY,
                secure=settings.REFRESH_COOKIE_SECURE,
                samesite=settings.REFRESH_COOKIE_SAMESITE,
                path=settings.REFRESH_COOKIE_PATH,
            )
            response.data.pop('refresh', None)

        return response