# #!/usr/bin/env python3
# """
# Simple HTTP server that serves index.html for all routes (SPA support)
# """
# import http.server
# import socketserver
# import os
# import urllib.parse

# class SPAHandler(http.server.SimpleHTTPRequestHandler):
#     def end_headers(self):
#         self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
#         self.send_header('Pragma', 'no-cache')
#         self.send_header('Expires', '0')
#         super().end_headers()

#     def do_GET(self):
#         # Parse the URL
#         parsed_path = urllib.parse.urlparse(self.path)
#         path = parsed_path.path
        
#         # If it's a file request (has extension), serve normally
#         if '.' in os.path.basename(path):
#             return super().do_GET()
        
#         # For all other routes, serve index.html (SPA routing)
#         if path != '/':
#             self.path = '/'
        
#         return super().do_GET()

# if __name__ == '__main__':
#     PORT = 8080
    
#     with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
#         print(f"Server running at http://localhost:{PORT}/")
#         print("Press Ctrl+C to stop the server")
#         try:
#             httpd.serve_forever()
#         except KeyboardInterrupt:
#             print("\nServer stopped.")