# -*- coding: utf-8 -*-

import logging
HELLO_WORLD = b'Hello world!\n'


from app import app
# if you open the initializer feature, please implement the initializer function, as below:
# def initializer(context):
#    logger = logging.getLogger()
#    logger.info('initializing')


def handler(environ, start_response):
    # context = environ['fc.context']
    # request_uri = environ['fc.request_uri']
    # for k, v in environ.items():
    #   if k.startswith('HTTP_'):
    #     # process custom request headers
    #     pass
    # # do something here
    # status = '200 OK'
    # response_headers = [('Content-type', 'text/plain')]
    # start_response(status, response_headers)
    # return [HELLO_WORLD]
    logger = logging.getLogger()
    logger.info('hello world')
    return app(environ, start_response)
