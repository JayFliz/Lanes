# Lanes responsive Grid
A simple responsive grid created by [Steer](http://steer.me) for our students, but available to all for free.

Want to see a demo check out the [site](http://steersystems.github.io/Lanes).

## Quick start

### 1. Download
Using Lanes is really super simple, first off [download the files](https://github.com/steersystems/Lanes/archive/master.zip), open up the zip file and the files you want are in the `dist` folder.

You can use either `lanes.min.css` or `lanes.css`, both have the same code but the `.min.css` verison has been compressed to make it smaller.


### 2. Link the stylesheet
Link Lanes CSS to your HTML head:
````html
<link rel="stylesheet" href="css/lanes.min.css">
````

### 3. Responsive
Remember to add the viewport meta tag to your head:
````html
<meta name="viewport" content="width=device-width">
````

## Using Lanes
You can add a class of `container` around your site to set a width of `960px` and align it to the center of the page.

To use the grid you must specify a `row` class to contain your 12 columns.

````html
<div class="row">

</div>
````

You have 12 columns in each row that you can use. To create them just use the `column/s` class.

````html
<div class="row">
  <div class="four columns">

  </div>
  <div class="four columns">

  </div>
  <div class="four columns">

  </div>
</div>
````

## Offsets
You can also offset columns by a number of columns as well.

````html
<div class="row">
  <div class="six columns offset-by-six">

  </div>
</div>
````
This allows you to semantically move columns along without the need for extra markup.

## Mobile
We have created one breakpoint at `480px` for small devices. At this size all the columns become 100% and stack on top of each other.

## Extras
You can center columns into the middle of the page by adding the `centered` class (a caveat of this is that you can only have one centered set of columns per row).

## Bower
If you're into [Bower](http://bower.io/) you can install Lanes from there.
````
bower install lanes
````

## License
Do what you want. See [LICENSE](https://github.com/steersystems/Lanes/blob/master/LICENSE) (MIT)