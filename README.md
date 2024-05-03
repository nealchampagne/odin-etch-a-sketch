# Etch-a-Sketch

## Description

This is my implementation for the Odin Project's Etch-a-Sketch project.

I used the DOMContentLoaded event to trigger the first population of the page with a default 16 x 16 grid.

After that, there's a three-button UI to toggle Party Mode and Shading Mode, as well as reset/resize the drawing area.

The grid generator attaches mouseover event listeners to the pixel elements which then change the color/opacity of the pixel elements depending on which mode is active.