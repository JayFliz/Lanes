# Lanes responsive Grid
A simple responsive grid created by [Steer](http://steer.me) for our students, but available to all for free.

Want to see a demo check out the [site](http://steersystems.github.io/lanes).

## Quick start

### 1. Download
Using Lanes is really super simple, first off [download the file]().

### 2. Link the stylesheet
The link Lanes to your HTML head:
`<link rel="stylesheet" href="css/lanes.min.css">`

### 3. Responsive
Remember to add the viewport meta tag to your head:
`<meta name="viewport" content="width=device-width">`

## Using Lanes
You can add a class of `container` around your site to set a width of `960px` and align it to the center of the page.

To use the grid you must specify a `row` class to contain your 12 columns.

````
<div class="row">

</div>
````

You have 12 columns in each row that you cna use. To create them just use the `column/s` class.

````
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

````
<div class="row">
  <div class="six columns offset-by-6">

  </div>
</div>
````
This allows you to semantically move columns along without the need for extra markup.

## Mobile
We have created one breakpoint at `480px` for small devices. At this size all the columns become 100% and stack on top of each other.

## Extras
You can center columns into the middle of the page by adding the `centered` class (a caveat of this is that you can only have one centered set of columns per row).

## License
Do what you want. See [LICENSE]() (MIT)