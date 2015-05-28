this["MoranRealty"] = this["MoranRealty"] || {};
this["MoranRealty"]["Templates"] = this["MoranRealty"]["Templates"] || {};

this["MoranRealty"]["Templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"copyright\">\n	<div class=\"container\">\n		<div class=\"row\">\n			<div class=\"col-sm-12\">\n				&copy; 2015 - Moran Realty. All rights reserved.\n				\n			</div>\n		</div>\n	</div>\n</div>";
  },"useData":true});

this["MoranRealty"]["Templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"top-bar\">\n	<div class=\"container\">\n		<div class=\"row\">\n			<div class=\"col-sm-12\">\n				<ul id=\"top-info\">\n					<li>Phone: <a href=\"tel:0755090700\">07 5509 0700</li>\n					<li>Email: <a href=\"mailto:office@promoran.com\">info@moranrealty.com.au</a></li>\n				</ul>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id=\"nav-section\">\n	<div class=\"container\">\n		<div class=\"row\">\n			<div class=\"col-sm-12\">\n				<a href=\"index.html\" class=\"nav-logo\"><img src=\"images/logo.png\" alt=\"Cozy Logo\" /></a>\n				\n				<!-- BEGIN MAIN MENU -->\n				<nav class=\"navbar\">\n					<button id=\"nav-mobile-btn\"><i class=\"fa fa-bars\"></i></button>\n					\n					<ul class=\"nav navbar-nav\">\n						<li>\n							<a href=\"index.html\">Home</a>\n						</li>\n						\n						<li class=\"dropdown\">\n							<a href=\"#\" data-toggle=\"dropdown\" data-hover=\"dropdown\">For Sale<b class=\"caret\"></b></a>\n							<ul class=\"dropdown-menu\">\n								<li><a href=\"residential-properties.html\">Browse Properties for Sale</a></li>\n								<li><a href=\"undercontract-properties.html\">Browse Properties under contract</a></li>\n								<li><a href=\"sold-properties.html\">Browse Sold Properties</a></li>\n							</ul>	\n						</li>\n\n						<li class=\"dropdown\">\n							<a href=\"#\" data-toggle=\"dropdown\" data-hover=\"dropdown\">For Rent<b class=\"caret\"></b></a>\n							<ul class=\"dropdown-menu\">\n								<li><a href=\"rental-properties.html\">Browse Properties for Rent</a></li>\n							</ul>\n						</li>\n\n						<li>\n							<a href=\"sell-your-home.html\">Sell your home</a>\n						</li>\n\n						<li>\n							<a href=\"property-management.html\">Property management</a>\n						</li>\n						\n						<li>\n							<a href=\"about.html\">Why Moran Realty?</a>\n						</li>\n						\n						<li><a href=\"contacts.html\">Contact Us</a></li>\n					</ul>\n					\n				</nav>\n				<!-- END MAIN MENU -->\n				\n			</div>\n		</div>\n	</div>\n</div>";
  },"useData":true});

this["MoranRealty"]["Templates"]["homeSlider"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n						<div class=\"item\" data-animation-direction=\"from-bottom\" data-animation-delay=\"250\">\n							<div class=\"image\">\n								<a href=property-detail.html?id="
    + escapeExpression(lambda((depth0 != null ? depth0.uniqueID : depth0), depth0))
    + " class=\"info\">\n									<h3>"
    + escapeExpression(lambda((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h3>\n									<span class=\"location\">\n										"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.streetNumber : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.street : stack1), depth0))
    + " <br>\n										"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.suburb : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.state : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.postcode : stack1), depth0))
    + "\n									</span>\n								</a>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "							</div>\n							<div class=\"price\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rent : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.priceView : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "									\n							</div>\n							<ul class=\"amenities\">\n								<li><i class=\"icon-bedrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bedrooms : stack1), depth0))
    + "</li>\n								<li><i class=\"icon-bathrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bathrooms : stack1), depth0))
    + "</li>\n								<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.garages : stack1), depth0))
    + "</li>\n								<li><i class=\"icon-pool\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.pool : stack1), depth0))
    + "</li>\n							</ul>\n						</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "									<img width=\"400\" height=\"250\" src="
    + escapeExpression(((helpers.image || (depth0 && depth0.image) || helperMissing).call(depth0, (depth0 != null ? depth0['0'] : depth0), {"name":"image","hash":{},"data":data})))
    + " alt=\"property image\" />\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "								<i class=\"fa fa-home\"></i>For Rent\n								<span>$"
    + escapeExpression(lambda((depth0 != null ? depth0.rent : depth0), depth0))
    + "</span>\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "								<i class=\"fa fa-home\"></i>For Sale\n								<span>"
    + escapeExpression(lambda((depth0 != null ? depth0.priceView : depth0), depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	<div class=\"parallax\" data-stellar-background-ratio=\"0.5\">\n		<div class=\"container\">\n			<div class=\"row\">\n				<div class=\"col-sm-12\">\n					<h1 class=\"section-title\" data-animation-direction=\"from-bottom\" data-animation-delay=\"50\">Available Properties</h1>\n\n					<div id=\"new-properties-slider\" class=\"owl-carousal carousel-style1\">\n\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n\n				</div>\n			</div>\n		</div>\n	</div>";
},"useData":true});

this["MoranRealty"]["Templates"]["rentalProperties"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n	<div class=\"item col-xs-12 col-sm-6 col-md-4\">\n		<div class=\"image\">\n			<a href=\"property-detail.html?id="
    + escapeExpression(lambda((depth0 != null ? depth0.uniqueID : depth0), depth0))
    + "\">\n				<h3>"
    + escapeExpression(lambda((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h3>\n				<span class=\"location\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.streetNumber : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.street : stack1), depth0))
    + " <br>\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.suburb : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.state : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.postcode : stack1), depth0))
    + "\n				</span>\n			</a>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n		<div class=\"price\">\n			<i class=\"fa fa-home\"></i>For rent\n			<span>$"
    + escapeExpression(lambda((depth0 != null ? depth0.rent : depth0), depth0))
    + " per week</span>\n		</div>\n		<ul class=\"amenities\">\n			<li><i class=\"icon-bedrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bedrooms : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-bathrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bathrooms : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.garages : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-pool\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.pool : stack1), depth0))
    + "</li>\n		</ul>\n	</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<img height=\"300\" src="
    + escapeExpression(((helpers.image || (depth0 && depth0.image) || helperMissing).call(depth0, (depth0 != null ? depth0['0'] : depth0), {"name":"image","hash":{},"data":data})))
    + " alt=\"property image\" />\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["MoranRealty"]["Templates"]["residentialProperties"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "	\n	<div class=\"item col-xs-12 col-sm-6 col-md-4\">\n		<div class=\"image\">\n			<a href=property-detail.html?id="
    + escapeExpression(lambda((depth0 != null ? depth0.uniqueID : depth0), depth0))
    + ">\n				<h3>"
    + escapeExpression(lambda((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h3>\n				<span class=\"location\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.streetNumber : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.street : stack1), depth0))
    + " <br>\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.suburb : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.state : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.postcode : stack1), depth0))
    + "\n				</span>\n			</a>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n		<div class=\"price\">\n			<i class=\"fa fa-home\"></i>For Sale \n			<span>"
    + escapeExpression(lambda((depth0 != null ? depth0.priceView : depth0), depth0))
    + "</span>\n		</div>\n		<ul class=\"amenities\">\n			<li><i class=\"icon-bedrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bedrooms : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-bathrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bathrooms : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.garages : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-pool\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.pool : stack1), depth0))
    + "</li>\n		</ul>\n	</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<img height=\"300\" src="
    + escapeExpression(((helpers.image || (depth0 && depth0.image) || helperMissing).call(depth0, (depth0 != null ? depth0['0'] : depth0), {"name":"image","hash":{},"data":data})))
    + " alt=\"property image\" />\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["MoranRealty"]["Templates"]["similarProperties"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n		<div class=\"item col-xs-12 col-sm-6 col-md-4\">\n			<div class=\"image\">\n				<a href=\"property-detail.html?id="
    + escapeExpression(lambda((depth0 != null ? depth0.uniqueID : depth0), depth0))
    + "\">\n					<h3>"
    + escapeExpression(lambda((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h3>\n					<span class=\"location\">\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.streetNumber : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.street : stack1), depth0))
    + " <br>\n						"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.suburb : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.state : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.postcode : stack1), depth0))
    + "\n					</span>\n				</a>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</div>\n			<div class=\"price\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rent : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.priceView : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n			<ul class=\"amenities\">\n				<li><i class=\"icon-bedrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bedrooms : stack1), depth0))
    + "</li>\n				<li><i class=\"icon-bathrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bathrooms : stack1), depth0))
    + "</li>\n				<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.garages : stack1), depth0))
    + "</li>\n				<li><i class=\"icon-pool\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.pool : stack1), depth0))
    + "</li>\n			</ul>\n		</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<img height=\"300\" src="
    + escapeExpression(((helpers.image || (depth0 && depth0.image) || helperMissing).call(depth0, (depth0 != null ? depth0['0'] : depth0), {"name":"image","hash":{},"data":data})))
    + " alt=\"property image\" />\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<i class=\"fa fa-home\"></i>For Rent\n					<span>$"
    + escapeExpression(lambda((depth0 != null ? depth0.rent : depth0), depth0))
    + "</span>\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<i class=\"fa fa-home\"></i>For Sale\n					<span>"
    + escapeExpression(lambda((depth0 != null ? depth0.priceView : depth0), depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n\n\n";
},"useData":true});

this["MoranRealty"]["Templates"]["singleProperty"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = ((helpers['if-equal'] || (depth0 && depth0['if-equal']) || helperMissing).call(depth0, (depth0 != null ? depth0.uniqueID : depth0), {"name":"if-equal","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "\n<div class=\"row\">\n<div class=\"main col-sm-12\">\n\n<h1 class=\"property-title\">"
    + escapeExpression(lambda((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h1>\n\n<div class=\"property-topinfo\">\n	<ul class=\"amenities\">\n		<li><i class=\"icon-bedrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bedrooms : stack1), depth0))
    + "</li>\n		<li><i class=\"icon-bathrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bathrooms : stack1), depth0))
    + "</li>\n		<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.garages : stack1), depth0))
    + "</li>\n		<li><i class=\"icon-pool\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.pool : stack1), depth0))
    + "</li>\n		<li><i class=\"icon-find-property\"></i> \n			"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.streetNumber : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.street : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.suburb : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.state : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.postcode : stack1), depth0))
    + "\n		</li>\n	</ul>\n\n	<div id=\"property-id\">ID: "
    + escapeExpression(lambda((depth0 != null ? depth0.uniqueID : depth0), depth0))
    + "</div>\n</div>\n\n<!-- BEGIN PROPERTY DETAIL SLIDERS WRAPPER -->\n<div id=\"property-detail-wrapper\" class=\"style1\">\n\n";
  stack1 = ((helpers['if-check-sold'] || (depth0 && depth0['if-check-sold']) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), {"name":"if-check-sold","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = ((helpers['if-check-current'] || (depth0 && depth0['if-check-current']) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), {"name":"if-check-current","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<!-- BEGIN PROPERTY DETAIL LARGE IMAGE SLIDER -->\n	<div id=\"property-detail-large\" class=\"owl-carousel\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.img : stack1), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n	<!-- END PROPERTY DETAIL LARGE IMAGE SLIDER -->\n\n	<!-- BEGIN PROPERTY DETAIL THUMBNAILS SLIDER -->\n	<div id=\"property-detail-thumbs\" class=\"owl-carousel\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.img : stack1), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n	<!-- END PROPERTY DETAIL THUMBNAILS SLIDER -->\n\n	<p>"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n\n</div>\n\n\n\n\n<h1 class=\"section-title\">Property Features</h1>\n<!-- BEGIN PROPERTY FEATURES LIST -->\n<ul class=\"property-features col-sm-6\">\n	<li><i class=\"icon-bedrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bedrooms : stack1), depth0))
    + " Bedrooms</li>\n	<li><i class=\"icon-bathrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bathrooms : stack1), depth0))
    + " Bathrooms</li>\n	<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.garages : stack1), depth0))
    + " Garages</li>\n	<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.carports : stack1), depth0))
    + " Carports</li>\n";
  stack1 = ((helpers['if-equal-features'] || (depth0 && depth0['if-equal-features']) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.alarmSystem : stack1), {"name":"if-equal-features","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</ul>\n\n<ul class=\"property-features col-sm-6\">\n";
  stack1 = ((helpers['if-check-current'] || (depth0 && depth0['if-check-current']) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), {"name":"if-check-current","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers['if-check-sold'] || (depth0 && depth0['if-check-sold']) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), {"name":"if-check-sold","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n\n";
  stack1 = ((helpers['if-equal-features'] || (depth0 && depth0['if-equal-features']) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.pool : stack1), {"name":"if-equal-features","hash":{},"fn":this.program(23, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers['if-equal-features'] || (depth0 && depth0['if-equal-features']) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.airConditioning : stack1), {"name":"if-equal-features","hash":{},"fn":this.program(25, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "	<li><i class=\"icon-house\"></i> Other Features - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.otherFeatures : stack1), depth0))
    + "</li>	\n</ul>\n<!-- END PROPERTY FEATURES LIST -->\n\n\n<h1 class=\"section-title\">Property Location</h1>\n<!-- PROPERTY MAP HOLDER -->\n<div id=\"property_location\" class=\"map col-sm-12\">\n	<iframe src=https://www.google.com/maps/embed/v1/place?&q="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.Geocode : depth0)) != null ? stack1.Latitude : stack1), depth0))
    + "+"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.Geocode : depth0)) != null ? stack1.Longitude : stack1), depth0))
    + "&zoom=18&key=AIzaSyCVemzl1kmBziHJBq7O1F13q6NxJVuVj90 height=\"350\" frameborder=\"0\" style=\"border:0\"></iframe>\n</div>\n\n\n<h1 class=\"section-title\">Agent Information</h1>\n<!-- BEING AGENT INFORMATION -->\n<div class=\"property-agent-info\">\n	<div class=\"agent-detail col-md-3\"></div>\n	<div class=\"agent-detail col-md-6\">\n\n		<div class=\"info\">\n			<header>\n				<h2>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.listingAgent : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\n			</header>\n\n			<ul class=\"contact-us\">\n				<li><i class=\"fa fa-envelope\"></i><a href=mailto:";
  stack1 = ((helpers.changeEmailDomain || (depth0 && depth0.changeEmailDomain) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.listingAgent : depth0)) != null ? stack1.email : stack1), {"name":"changeEmailDomain","hash":{},"fn":this.program(27, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "> ";
  stack1 = ((helpers.changeEmailDomain || (depth0 && depth0.changeEmailDomain) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.listingAgent : depth0)) != null ? stack1.email : stack1), {"name":"changeEmailDomain","hash":{},"fn":this.program(27, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a></li>\n				<li><i class=\"fa fa-phone\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.listingAgent : depth0)) != null ? stack1.telephone : stack1), depth0))
    + "</li>\n			</ul>\n		</div>\n	</div>\n	<div class=\"agent-detail col-md-3\"></div>\n</div>\n\n</div>\n</div>\n\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<div class=\"price\">\n		<i class=\"fa fa-home\"></i>Sold For\n		<span>$"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.soldDetails : depth0)) != null ? stack1.price : stack1), depth0))
    + "</span>\n	</div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	<div class=\"price\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rent : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.priceView : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<i class=\"fa fa-home\"></i>For Rent\n			<span>$"
    + escapeExpression(lambda((depth0 != null ? depth0.rent : depth0), depth0))
    + " per week</span>\n			<span>$"
    + escapeExpression(lambda((depth0 != null ? depth0.bond : depth0), depth0))
    + " bond</span>\n";
},"8":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<i class=\"fa fa-home\"></i>For Sale\n			<span>"
    + escapeExpression(lambda((depth0 != null ? depth0.priceView : depth0), depth0))
    + "</span>\n";
},"10":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<div class=\"item\">\n				<img height=\"600\" src="
    + escapeExpression(lambda((depth0 != null ? depth0.url : depth0), depth0))
    + " alt=\"property image\" />\n			</div>	\n";
},"12":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<div class=\"item\">\n				<img height=\"300\" src="
    + escapeExpression(lambda((depth0 != null ? depth0.url : depth0), depth0))
    + " alt=\"property image\" />\n			</div>	\n";
},"14":function(depth0,helpers,partials,data) {
  return "		<li><i class=\"icon-security\"></i> Security System Installed</li>\n";
  },"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	<li> \n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rent : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.priceView : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</li>\n";
},"17":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<i class=\"icon-rent-sign\"></i>\n			This property is for rent. Available from "
    + escapeExpression(lambda((depth0 != null ? depth0.dateAvailable : depth0), depth0))
    + "\n";
},"19":function(depth0,helpers,partials,data) {
  return "		<i class=\"icon-sale-sign\"></i>\n			This property is for sale\n";
  },"21":function(depth0,helpers,partials,data) {
  return "	<li><i class=\"icon-sold-sign\"></i> \n		This property has been sold \n	</li>\n";
  },"23":function(depth0,helpers,partials,data) {
  return "		<li><i class=\"icon-pool\"></i> Outdoor Pool</li>\n";
  },"25":function(depth0,helpers,partials,data) {
  return "		<li><i class=\"icon-rooms\"></i> Air Conditioning</li>\n";
  },"27":function(depth0,helpers,partials,data) {
  return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"useData":true});

this["MoranRealty"]["Templates"]["soldProperties"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "	\n	<div class=\"item col-xs-12 col-sm-6 col-md-4\">\n		<div class=\"image\">\n			<a href=property-detail.html?id="
    + escapeExpression(lambda((depth0 != null ? depth0.uniqueID : depth0), depth0))
    + ">\n				<h3>"
    + escapeExpression(lambda((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h3>\n				<span class=\"location\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.streetNumber : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.street : stack1), depth0))
    + " <br>\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.suburb : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.state : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.postcode : stack1), depth0))
    + "\n				</span>\n			</a>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n		<div class=\"price\">\n			<i class=\"fa fa-home\"></i>Sold For\n			<span>$"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.soldDetails : depth0)) != null ? stack1.price : stack1), depth0))
    + "</span>\n		</div>\n		<ul class=\"amenities\">\n			<li><i class=\"icon-bedrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bedrooms : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-bathrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bathrooms : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.garages : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-pool\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.pool : stack1), depth0))
    + "</li>\n		</ul>\n	</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<img height=\"300\" src="
    + escapeExpression(((helpers.image || (depth0 && depth0.image) || helperMissing).call(depth0, (depth0 != null ? depth0['0'] : depth0), {"name":"image","hash":{},"data":data})))
    + " alt=\"property image\" />\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["MoranRealty"]["Templates"]["underContractProperties"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "	\n	<div class=\"item col-xs-12 col-sm-6 col-md-4\">\n		<div class=\"image\">\n			<a href=property-detail.html?id="
    + escapeExpression(lambda((depth0 != null ? depth0.uniqueID : depth0), depth0))
    + ">\n				<h3>"
    + escapeExpression(lambda((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h3>\n				<span class=\"location\">\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.streetNumber : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.street : stack1), depth0))
    + " <br>\n					"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.suburb : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.state : stack1), depth0))
    + "&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.postcode : stack1), depth0))
    + "\n				</span>\n			</a>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n		<div class=\"price\">\n			<i class=\"fa fa-home\"></i>For Sale\n			<span>"
    + escapeExpression(((helper = (helper = helpers.priceView || (depth0 != null ? depth0.priceView : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"priceView","hash":{},"data":data}) : helper)))
    + "</span>\n		</div>\n		<ul class=\"amenities\">\n			<li><i class=\"icon-bedrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bedrooms : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-bathrooms\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.bathrooms : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-garage\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.garages : stack1), depth0))
    + "</li>\n			<li><i class=\"icon-pool\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.features : depth0)) != null ? stack1.pool : stack1), depth0))
    + "</li>\n		</ul>\n	</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<img height=\"300\" src="
    + escapeExpression(((helpers.image || (depth0 && depth0.image) || helperMissing).call(depth0, (depth0 != null ? depth0['0'] : depth0), {"name":"image","hash":{},"data":data})))
    + " alt=\"property image\" />\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});