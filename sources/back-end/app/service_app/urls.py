
from django.conf import settings
from django.conf.urls.static import static
from .views import Products
from django.urls import path

urlpatterns = [
    path("products", Products.as_view(), name="list-create-products"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
