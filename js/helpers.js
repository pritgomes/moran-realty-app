
var parameters = location.search.substring(1).split("=");
var propertyid = parameters[1];

Handlebars.registerHelper('image', function(context) {
    return context.url;
});



Handlebars.registerHelper('if-equal', function(value, options) {

  if(value == propertyid) {
    
    return options.fn(this);

  }
  
  return options.inverse(this);
});

Handlebars.registerHelper('if-check-current', function(status, options) {

  if(status == 'current') {
    return options.fn(this);
  }
    return options.inverse(this);
});

Handlebars.registerHelper('if-check-sold', function(status, options) {

  if(status == 'sold') {
    return options.fn(this);
  }
    return options.inverse(this);
});


Handlebars.registerHelper('if-equal-features', function(value, options) {
  if(value == '1') {
    return options.fn(this);
  }
    return options.inverse(this);
});

Handlebars.registerHelper('changeEmailDomain', function(value, options) {
  return value.replace('@promoran.com','@moranrealty.com.au')
});


