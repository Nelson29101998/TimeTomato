from django.contrib import admin
from django.urls import path, include
from App1.views import IndexView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView),
    path("__reload__/", include("django_browser_reload.urls")),
]
