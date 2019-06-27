"use strict";
jQuery(document).ready(function ($) {
								 
	function get_templates(container){
    this.container=container
	}
	
	get_templates.prototype.open=function() {
		container.show();
	}
	
	 get_templates.prototype.renderHTML=function(jdata) {	
		 template=$('#get_templatesTemplate').text();
		 compiledTemplate=Handlebars.compile(template);
		 renderedTemplate=compiledTemplate(jdata);
		 container.html(renderedTemplate);
			}

    // Append includes (header, footer, navigation etc.)
    $get_templates("/_includes/header", function (data) {
        $('#particles-js').append(data);
    });

    $get_templates("/_includes/navigation", function (data) {
        $('#site-nav').append(data);
    });
	
	$get_templates("/_includes/team", function (data) {
        $('#team').append(data);
    });
    

    $get_templates("/_includes/footer", function (data) {
        $('#sitefooter').append(data);
    });
    
});