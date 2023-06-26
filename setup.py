from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in website_speed/__init__.py
from website_speed import __version__ as version

setup(
	name="website_speed",
	version=version,
	description="Website Speed Company",
	author="alaalsalam",
	author_email="alaalsalam101@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
