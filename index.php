<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>wSticky demo</title>
            <link rel="stylesheet" type="text/css" media="screen" href="wsticky.full.css" />
            <style type="text/css">
                a.button {
                    color: #6e6e6e;
                    font: bold 12px Helvetica, Arial, sans-serif;
                    text-decoration: none;
                    padding: 7px 12px;
                    position: relative;
                    display: inline-block;
                    text-shadow: 0 1px 0 #fff;
                    -webkit-transition: border-color .218s;
                    -moz-transition: border .218s;
                    -o-transition: border-color .218s;
                    transition: border-color .218s;
                    background: #f3f3f3;
                    background: -webkit-gradient(linear,0% 40%,0% 70%,from(#F5F5F5),to(#F1F1F1));
                    background: -moz-linear-gradient(linear,0% 40%,0% 70%,from(#F5F5F5),to(#F1F1F1));
                    border: solid 1px #dcdcdc;
                    border-radius: 2px;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    margin-right: 10px;
                }
                a.button:hover {
                    color: #333;
                    border-color: #999;
                    -moz-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
                    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
                    cursor: pointer;
                }
                a.button:active {
                    color: #000;
                    border-color: #444;
                }
            </style>
            <script type="text/javascript" src="jquery-1.7.2.min.js"></script>
            <script type="text/javascript" src="jquery.wsticky.js"></script>
            <script type="text/javascript">
                $(document).ready(function() {
                    $('#right-top').click(function() {
                       $.wSticky('默认位置为右上角');
                    });
                });
            </script>
    </head>
    <body>
        <div>
            <a class="button" href="#" id="right-top">右上角</a>
        </div>      
    </body>
</html>
