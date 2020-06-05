"use strict";
var digitalData = {};
var analytics = analytics || (function(){
	
    // Arguments passed into the init function
	var _args = {};
	
    // Get the file name from the URL.
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('https://www.apple.com/')+1);
    
    // Remove .html from file name.
    filename = filename.replace(".html", "");
    
    // If URL ends with /, then it should be the index page.
    if (filename == '') {
    	filename = "index";
    }
    
    var lang = document.documentElement.lang.toLowerCase();
    lang = lang.replace("_", "-");
    
    var vids = document.getElementsByTagName("VIDEO");
	
    document.addEventListener('click', function(e) {
        var target = e.target;

        while (target && target.nodeName !== 'A') {
          console.log(target.nodeName)
          target = target.parentNode;

          if (!target) { return; }
        }
        console.log("Link " + target.href + " was clicked!");
        analytics.linkClick(target.href);
      });

    //Add event listeners to videos
    for (var i = 0 ; i < vids.length; i++) {
        vids[i].addEventListener('play', function(e) {
            var vidAttribute = (e.target.hasAttribute("data-video-src")) ? e.target.getAttribute("data-video-src") : e.target.getAttribute("src") ; //R1 or AC
            console.log("Video " + vidAttribute + " starts playing");
            analytics.videoStart(vidAttribute);
        });
        vids[i].addEventListener('ended', function(e) {
            var vidAttribute = (e.target.hasAttribute("data-video-src")) ? e.target.getAttribute("data-video-src") : e.target.getAttribute("src") ; //R1 or AC
            console.log("Video " + vidAttribute + " finished playing");
            analytics.videoComplete(vidAttribute);
        });
    }
    
	return {
		init : function(Args) {
			_args = Args;
            console.log(_args);
	        console.log(url);
	        console.log(filename);
	        console.log('analytics firing');
	        
	        digitalData.page={ 
	            pageInfo:{
	                pageName:document.title.toLowerCase(),
	                siteType: _args[0], //Internal/External
	                siteCountry: lang,
	                sourceToWebsite:document.referrer,
	                appType: "immersive",
	             },
	             category:{
	                 primaryCategory: "jobs",
	                 subCategory1: lang,
	                 subCategory2: filename
	             }
	         };
	    },        
	    
	    linkClick : function(linkName) {
	    	digitalData.eventData={ 
	    	    linkName:linkName
		    }
		    _satellite.track('linkClick');
	    },
	    
	    // Tracks start of video play
	    videoStart: function(videoName){ 
	        digitalData.eventData={ 
	          videoName: videoName
	        }
	        _satellite.track('videoStart');
	    },
	    
	    // Tracks completion of video play
	    videoComplete: function(videoName){ 
	        digitalData.eventData={ 
	          videoName: videoName
	        }
	        _satellite.track('videoComplete');
	    }
	};    
}());
