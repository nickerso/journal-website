# journal-website
Source for journal.physiomeproject.org.

To run a local instance of the website on Windows, first get a debug, autoreloading pelican instance running in one command window (assuming virtual environment with all required packages installed):

```
c:\journal-website-home\ $> pelican --debug --autoreload -r content -o output -s pelicanconf.py
```

and then run a pelican server to host it from the output folder:

```
c:\journal-webiste-home\output\ $> python -m pelican.server 1234
```

(the output claims this is deprecated, but still seems to work.) Visit [localhost:1234](http://localhost:1234) to see the site. Pages will regenerate as needed.

Mac and Linux users can get the same thing using the available `Makefile`.