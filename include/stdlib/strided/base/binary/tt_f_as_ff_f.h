/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*
* The following is auto-generated. Do not manually edit. See scripts/loops.js.
*/

#ifndef STDLIB_STRIDED_BASE_BINARY_TT_F_AS_FF_F_H
#define STDLIB_STRIDED_BASE_BINARY_TT_F_AS_FF_F_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a binary callback to strided input array elements and assigns results to elements in a strided output array.
*/
void stdlib_strided_tt_f_as_ff_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_BASE_BINARY_TT_F_AS_FF_F_H
