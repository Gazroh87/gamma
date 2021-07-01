#!/usr/bin/env python3
#
import argparse
import http.server

def get_parser():
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type = int, default=8000)
    return parser



def calc_boxes_size(self,width,height,max_area):
    """Returns an array of tuples, describing 
    a list of boxes which will  will tile the widt xheigth
    request, each with an area  less than max_area

    Each tuple is start_col,tile_width,start_row,tile_height

    """
    # FIXME Actually verify max area, and
    # try to minimize sum(widths) + sum(heights)
    return [ (0, width, 0, height), ]


class BoxesCalc(http.server.BaseHTTPRequestHandler):


    def do_GET(self,*args):
        print(self.path,args)
        self.send_error(404,"Implementation required")


def main(opts):
    listen_to = ('',opts.port)
    s = http.server.HTTPServer(listen_to, BoxesCalc)
    print("serving at port", opts.port)
    s.serve_forever()

if __name__ == "__main__":
    p = get_parser()
    opts = p.parse_args()
    main(opts)
