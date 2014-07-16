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
 * @fileoverview Generating Python for big data blocks.
 * @author acbart@vt.edu (Austin Cory Bart)
 */
'use strict';

goog.provide('Blockly.Python.big');

goog.require('Blockly.Python');
var CITIES = {'BLACKSBURG': 'Blacksburg, VA',
              'SEATTLE': 'Seattle, WA',
              'MIAMI': 'Miami, FL',
              'SANJOSE': 'San Jose, CA',
              'NEWYORK': 'New York, NY'}
Blockly.Python['weather_get_temperature'] = function(block) {
    Blockly.Python.definitions_['import_weather'] = 'import weather';
    var code = "weather.get_temperature('"+CITIES[block.getTitleValue('CITY')]+"')";
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['weather_get_forecasts'] = function(block) {
    Blockly.Python.definitions_['import_weather'] = 'import weather';
    var code = "weather.get_forecasts('"+CITIES[block.getTitleValue('CITY')]+"')";
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['stocks_get_current'] = function(block) {
    Blockly.Python.definitions_['import_stocks'] = 'import stocks';
    var code = "stocks.get_current('"+block.getTitleValue('STOCK')+"')";
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['stocks_get_past'] = function(block) {
    Blockly.Python.definitions_['import_stocks'] = 'import stocks';
    var code = "stocks.get_past('"+block.getTitleValue('STOCK')+"')";
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};