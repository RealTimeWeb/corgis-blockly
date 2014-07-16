/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for big data blocks.
 * @author acbart@vt.edu (Austin Cory Bart)
 */
'use strict';

goog.provide('Blockly.JavaScript.big');

goog.require('Blockly.JavaScript');

// Yep! We don't actually access the weather service. We could, but we don't.
Blockly.JavaScript['weather_get_temperature'] = function(block) {
    var WEATHER = {'BLACKSBURG': 60,
                   'SEATTLE': 47,
                   'MIAMI': 75,
                   'SANJOSE': 88,
                   'NEWYORK': 54};
    return [WEATHER[block.getTitleValue('CITY')], Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['weather_get_forecasts'] = function(block) {
    var WEATHER = {'BLACKSBURG': [60, 71, 65, 66, 78, 75, 66, 55, 53],
                   'SEATTLE':    [47, 53, 42, 41, 44, 50, 46, 44, 42],
                   'MIAMI':      [75, 80, 80, 81, 82, 79, 78, 50, 60],
                   'SANJOSE':    [88, 89, 92, 93, 90, 88, 93, 87, 85],
                   'NEWYORK':    [54, 50, 60, 63, 65, 61, 60, 59, 55]};
    return ['['+WEATHER[block.getTitleValue('CITY')]+']', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['stocks_get_current'] = function(block) {
    var STOCKS = {'FB': -0.74,
                   'AAPL': -1.13,
                   'MSFT': 0.31,
                   'GOOG': -0.09};
    return [STOCKS[block.getTitleValue('STOCK')], Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['stocks_get_past'] = function(block) {
    var STOCKS = {'FB':   [1.1, 1.0, 0.7, 0.12, -0.3, -0.34, -0.1, -0.45, -0.74],
                   'AAPL': [0.47, 0.53, 0.42, 0.41, 0.30, 0.10, -0.46, -0.84, -1.13],
                   'MSFT': [0.75, 0.80, 0.71, 0.67, 0.5, 0.15, 0.09, 0.03, 0.31],
                   'GOOG': [-0.27, -0.15, -0.11, 0.12, 0.3, 0.1, -0.3, -0.1, -0.09]};
    return ['['+STOCKS[block.getTitleValue('STOCK')]+']', Blockly.JavaScript.ORDER_NONE];
};