import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')
django.setup()

from django.contrib.auth.models import User

# เปลี่ยน username และรหัสผ่าน
new_username = 'Sahapap'
new_password = 'ict12367'

try:
    # ลองหา user เก่า
    user = User.objects.get(username='admin')
    # เปลี่ยน username และรหัสผ่าน
    user.username = new_username
    user.set_password(new_password)
    user.save()
    print(f'Changed username to {new_username} and password to {new_password}')
except User.DoesNotExist:
    # ถ้าไม่มี user ให้สร้างใหม่
    user = User.objects.create_superuser(new_username, 'sahapap@example.com', new_password)
    print(f'Created user {new_username} with password {new_password}')
