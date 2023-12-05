# Generated by Django 4.2.7 on 2023-11-30 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_app', '0003_task_completed'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='project',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='task',
            name='body',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]