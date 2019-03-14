#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

from os import walk
from os import sep
from functools import partial

def fullpath(root, dirpath, fname):
    if dirpath[len(dirpath) - 1] != sep:
        dirpath += sep
    if root[len(root) - 1] != sep:
        root += sep
    sub_dirpath = dirpath[dirpath.find(root) + len(root):]
    return (sub_dirpath + fname, dirpath + fname)

def template_pages_map(root):
    result = {}
    for (dirpath, dirnames, filenames) in walk(root):
        dirpathise = partial(fullpath, root, dirpath)
        fullnames = map(dirpathise, filenames)
        for (name, fullname) in fullnames:
            result[fullname] = name
    return result


AUTHOR = u'The Physiome Project'
SITENAME = u'The Physiome Journal'
SITEURL = ''

STATIC_PATHS = ['pdfs', 'models', 'archive-descriptions', 'data']

PATH = 'content'

TIMEZONE = 'GMT'
# Use filesystem date if not otherwise specified.
DEFAULT_DATE = "fs"

DEFAULT_LANG = u'en'
THEME = './themes/pj'

TEMPLATE_PAGES = template_pages_map(
    PATH + sep + 'custompages')  # Create a list of template pages to generate in content/custompages

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
CATEGORY_SAVE_AS = '{slug}/index.html'
CATEGORY_URL = '{slug}/index.html'

PAGE_SAVE_AS = '{slug}.html'
PAGE_URL = 'slug.html'

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10
CATEGORY_SAVE_AS = '{slug}/index.html'
CATEGORY_URL = '{slug}/index.html'
ARTICLE_URL = '{category}/{slug}.html'
ARTICLE_SAVE_AS = '{category}/{slug}.html'
PAGE_SAVE_AS = '{slug}.html'

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
