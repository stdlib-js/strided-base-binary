<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Binary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a binary callback to strided input array elements and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import binary from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.1.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.1.0-deno/mod.js';
```

#### binary( arrays, shape, strides, fcn )

Applies a binary callback to strided input array elements and assigns results to elements in a strided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function add( x, y ) {
    return x + y;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

binary( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], add );
// z => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing two strided input arrays and one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride lengths for the strided input and output arrays.
-   **fcn**: binary function to apply.

The `shape` and `strides` parameters determine which elements in the strided input and output arrays are accessed at runtime. For example, to index every other value in the strided input arrays and to index the first `N` elements of the strided output array in reverse order,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function add( x, y ) {
    return x + y;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = 3;

binary( [ x, y, z ], [ N ], [ 2, 2, -1 ], add );
// z => <Float64Array>[ 10.0, 6.0, 2.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function add( x, y ) {
    return x + y;
}

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = 3;

binary( [ x1, y1, z1 ], [ N ], [ -2, -2, 1 ], add );
// z0 => <Float64Array>[ 0.0, 0.0, 0.0, 12.0, 8.0, 4.0 ]
```

#### binary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a binary callback to strided input array elements and assigns results to elements in a strided output array using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function add( x, y ) {
    return x + y;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

binary.ndarray( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], [ 0, 0, 0 ], add );
// z => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting indices (i.e., index offsets) for the strided input and output arrays.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index every other value in the strided input arrays starting from the second value and to index the last `N` elements in the strided output array,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function add( x, y ) {
    return x + y;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = 3;

binary.ndarray( [ x, y, z ], [ N ], [ 2, 2, -1 ], [ 1, 1, z.length-1 ], add );
// z => <Float64Array>[ 0.0, 0.0, 0.0, 12.0, 8.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import filledarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled@deno/mod.js';
import binary from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.1.0-deno/mod.js';

function add( x, y ) {
    return x + y;
}

var N = 10;

var x = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarray( 0.0, N, 'generic' );
console.log( z );

var shape = [ N ];
var strides = [ 1, 1, -1 ];
var offsets = [ 0, 0, N-1 ];

binary.ndarray( [ x, y, z ], shape, strides, offsets, add );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-binary.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-binary

[test-image]: https://github.com/stdlib-js/strided-base-binary/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/strided-base-binary/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-binary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-binary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-binary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-binary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-binary/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-binary/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-binary/tree/esm
[branches-url]: https://github.com/stdlib-js/strided-base-binary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-binary/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
