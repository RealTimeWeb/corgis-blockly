/**
 * Visual Blocks Editor
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
 * @fileoverview Big Data blocks for Blockly.
 * @author acbart@vt.edu (Austin Cory Bart)
 */
'use strict';

goog.provide('Blockly.Blocks.big');

goog.require('Blockly.Blocks');

Blockly.Blocks['weather_get_temperature'] = {
  // Numeric value.
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendTitle('get temperature for')
        .appendTitle(new Blockly.FieldDropdown([['Blacksburg, VA', 'BLACKSBURG'], 
                                                ['Seattle, WA', 'SEATTLE'],
                                                ['Miami, FL', 'MIAMI'],
                                                ['San Jose, CA', 'SANJOSE'],
                                                ['New York, NY', 'NEWYORK']]), 'CITY');
    this.setOutput(true, 'Number');
  }
};

Blockly.Blocks['weather_get_forecasts'] = {
  // Numeric value.
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendTitle('get forecasts for')
        .appendTitle(new Blockly.FieldDropdown([['Blacksburg, VA', 'BLACKSBURG'], 
                                                ['Seattle, WA', 'SEATTLE'],
                                                ['Miami, FL', 'MIAMI'],
                                                ['San Jose, CA', 'SANJOSE'],
                                                ['New York, NY', 'NEWYORK']]), 'CITY');
    this.setOutput(true, 'Array');
  }
};

Blockly.Blocks['stocks_get_current'] = {
  // Numeric value.
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendTitle('get current stock for')
        .appendTitle(new Blockly.FieldDropdown([['Facebook', 'FB'], 
                                                ['Apple', 'AAPL'],
                                                ['Microsoft', 'MSFT'],
                                                ['Google', 'GOOG']]), 'STOCK');
    this.setOutput(true, 'Number');
  }
};

Blockly.Blocks['stocks_get_past'] = {
  // Numeric value.
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendTitle('get past stocks for')
        .appendTitle(new Blockly.FieldDropdown([['Facebook', 'FB'], 
                                                ['Apple', 'AAPL'],
                                                ['Microsoft', 'MSFT'],
                                                ['Google', 'GOOG']]), 'STOCK');
    this.setOutput(true, 'Array');
  }
};