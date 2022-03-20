         msg = " ";
         msg = " Welcome to ABBY0666 HUB FOR MINECRAFT HOSTING AND MORE " + msg;position = 0;
         function scrolltitle() {
         document.title = msg.substring(position, msg.length) + msg.substring(0, position); position++;
         if (position > msg.length) position = 0
         window.setTimeout("scrolltitle()",170);
         }
         scrolltitle();
