# Generated by Django 4.2.7 on 2023-11-30 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_app', '0004_task_project_alter_task_body'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='project',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
