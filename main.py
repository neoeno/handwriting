from http.server import HTTPServer, SimpleHTTPRequestHandler

httpd = HTTPServer(('', 81), SimpleHTTPRequestHandler)
httpd.serve_forever()
