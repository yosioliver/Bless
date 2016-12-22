// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life Bless
// http://www.infoconnect.com.my


// GENERATE FORM

function formGenerator(JSONInput, stringLayoutJavaScriptID)
{
	var elementMain = document.getElementById(stringLayoutJavaScriptID);
	var stringHTMLForm = "<form id='formMain'></form>";
	elementMain.innerHTML = stringHTMLForm;
	var stringMessageTitle = "Form generator";
	var stringMessageContent = "There is problem in the config file -> ";

	if (JSONInput.fieldset == undefined | JSONInput.fieldset == null | JSONInput.fieldset == "")
	{
		messageError(stringMessageTitle, stringMessageContent + "fieldset");
	}
	else
	{
		fieldsetGenerator(JSONInput.fieldset, "formMain");
	}
	
	if (JSONInput.question == undefined | JSONInput.question == null | JSONInput.question == "")
	{
		messageError(stringMessageTitle, stringMessageContent + "question");
	}
	else
	{
		questionGenerator(JSONInput.question);
	}
	
	if (JSONInput.input == undefined | JSONInput.input == null | JSONInput.input == "")
	{
		messageError(stringMessageTitle, stringMessageContent + "input");
	}
	else
	{
		inputGenerator(JSONInput.input);
	}
	
	if (JSONInput.table == undefined | JSONInput.table == null | JSONInput.table == "")
	{
		messageError(stringMessageTitle, stringMessageContent + "table");
	}
	else
	{
		tableGenerator(JSONInput.table);
	}
}

// GENERATE FIELDSET

function fieldsetGenerator(JSONFieldset, stringLayoutJavaScriptID)
{
	/* INITIALIZE */

	var stringJSONFieldsetKey;
	var stringJSONFieldsetLegend;
	var stringJSONFieldsetOrder;
	var stringJSONFieldsetState;
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var elementForm = document.getElementById(stringLayoutJavaScriptID);
	var stringHTMLFieldset = "";

	JSONFieldset = JSONSort(JSONFieldset, "fieldsetOrder");

	for (var i = 0; i < JSONFieldset.length; i++)
	{
		/* GET JSON */

		stringJSONFieldsetKey = JSONFieldset[i].fieldsetKey;
		stringJSONFieldsetLegend = JSONFieldset[i].fieldsetLegend;
		stringJSONFieldsetOrder = JSONFieldset[i].fieldsetOrder;
		stringJSONFieldsetState = JSONFieldset[i].fieldsetState;

		/* FIELDSET */

		if (stringJSONFieldsetState == stringStateTrue)
		{
			// if (stringJSONFieldsetLegend.length > 0)
			// {
			// 	stringHTMLFieldset += "<fieldset id='" + stringJSONFieldsetKey + "'><legend>" + stringJSONFieldsetLegend + "</legend><ul></ul></fieldset>";
			// }
			// else
			// {
				stringHTMLFieldset += "<fieldset id='" + stringJSONFieldsetKey + "'><ul></ul></fieldset>";
			// }
		}
		else
		{

		}
	}

	stringHTMLFieldset += "</form>";
	elementForm.innerHTML = stringHTMLFieldset;
};


// GENERATE QUESTION

function questionGenerator(JSONQuestion)
{
	/* INITIALIZE */

	var stringJSONQuestionKey;
	var stringJSONQuestionFieldsetKey;
	var stringJSONQuestionOrder;
	var stringJSONQuestionState;
	
	var stringHTMLQuestion;

	JSONQuestion = JSONSort(JSONQuestion, "questionOrder");

	for (var i = 0; i < JSONQuestion.length; i++)
	{
		/* GET JSON */

		stringJSONQuestionKey = JSONQuestion[i].questionKey;
		stringJSONQuestionOrder = JSONQuestion[i].questionOrder;
		stringJSONQuestionState = JSONQuestion[i].questionState;
		stringJSONQuestionFieldsetKey = JSONQuestion[i].fieldsetKey;
		stringHTMLQuestion = "";

		/* QUESTION */

		if (stringJSONQuestionState == stringStateTrue)
		{
			stringHTMLQuestion = "<li id='" + stringJSONQuestionKey + "'></li>";
			$(stringKres + stringJSONQuestionFieldsetKey + " ul").append(stringHTMLQuestion);
		}
		else
		{

		}
	}
};


// GENERATE INPUT

function inputGenerator(JSONInput)
{
	/* INITIALIZE */

	var stringJSONInputQuestionKey;
	var stringJSONInputLabelKey;
	var stringJSONInputLabelWidth;
	var stringJSONInputLabelValue;
	var stringJSONInputKey;
	var stringJSONInputName;
	var stringJSONInputType;
	var stringJSONInputPlaceholder;
	var stringJSONInputValue;
	var stringJSONInputState;
	var stringJSONInputValidationType;
	var stringJSONInputValidationName;
	var stringJSONInputOrder;
	var stringJSONInputWidth;
	var stringJSONInputKeyTemporary;
	var stringJSONInputFormulaKey;

	var arrayJSONInputValue;
	var arrayJSONInputText;
	var arrayJSONInputKey;
	
	var arrayJSONInputState;
	var arrayJSONInputSelectedValue;
	var stringAttributeState;

	var stringHTMLInput
	var elementQuestion;

	JSONInput = JSONSort(JSONInput, "inputOrder");

	for (var i = 0; i < JSONInput.length; i++)
	{
		/* GET JSON */

		stringJSONInputQuestionKey = JSONInput[i].questionKey;
		stringJSONInputLabelKey = JSONInput[i].labelKey;
		stringJSONInputLabelWidth = JSONInput[i].labelWidth;
		stringJSONInputLabelValue = JSONInput[i].labelValue;
		stringJSONInputKey = JSONInput[i].inputKey;
		stringJSONInputWidth = JSONInput[i].inputWidth;
		stringJSONInputName = JSONInput[i].inputName;
		stringJSONInputType = JSONInput[i].inputType;
		stringJSONInputPlaceholder = JSONInput[i].inputPlaceholder;
		stringJSONInputValue = JSONInput[i].inputValue;
		stringJSONInputState = JSONInput[i].inputState;
		stringJSONInputValidationType = JSONInput[i].inputValidationType;
		stringJSONInputValidationName = JSONInput[i].inputValidationName;
		stringJSONInputOrder = JSONInput[i].inputOrder;
		stringJSONInputFormulaKey = JSONInput[i].formulaKey;
		stringHTMLInput = "";
		arrayJSONInputState = [];
		arrayJSONInputSelectedValue = [];
		stringAttributeState = "";

		if (stringJSONInputState != stringStateFalse)
		{
			/* LABEL */

			if (stringJSONInputLabelKey != "")
			{
				if (stringJSONInputType == stringInputTypeRadioButton | stringJSONInputType == stringInputTypeCheckbox)
				{
					arrayJSONInputKey = stringJSONInputKey.split(stringJSONArraySeparator);
					stringJSONInputKeyTemporary = arrayJSONInputKey[0];
				}
				else 
				{
					stringJSONInputKeyTemporary = stringJSONInputKey;
				}

				stringHTMLInput += "<label for='" + stringJSONInputKeyTemporary + "' id='" + stringJSONInputLabelKey + "' class='" + stringJSONInputLabelWidth + "'>" + stringJSONInputLabelValue + "</label>";
			}
			else
			{

			}

			/* STATE, SELECTED and CHECKED */

			if (stringJSONInputState.indexOf(stringJSONStateSeparator) >= 0)
			{
				arrayJSONInputState = stringJSONInputState.split(stringJSONStateSeparator);
				stringJSONInputState = arrayJSONInputState[0];
				arrayJSONInputSelectedValue = arrayJSONInputState[1].split(stringJSONArraySeparator);
			}
			else
			{
				
			}

			/* INPUT */

			if (stringJSONInputType == stringInputTypeSelect)
			{
				/* SELECT */

				stringHTMLInput += 
					"<select " + 
					"id='" + stringJSONInputKey + "' " + 
					"class='" + stringJSONInputWidth + "' " + 
					"name='" + stringJSONInputName + "' " + 
					"placeholder='" + stringJSONInputPlaceholder + "' " + 
					stringJSONInputState + "='true' " + 
					stringDataValidationType + "='" + stringJSONInputValidationType + "' " + 
					stringDataErrorMessage + "='" + stringJSONInputValidationName + "' " + 
					stringDataFormulaKey + "='" + stringJSONInputFormulaKey + "' >";

				arrayJSONInputValue = stringJSONInputValue.split(stringJSONArraySeparator);
				arrayJSONInputText = stringJSONInputPlaceholder.split(stringJSONArraySeparator);

				for (var j = 0; j < arrayJSONInputValue.length; j++)
				{
					stringAttributeState = setInputStateAttribute(arrayJSONInputSelectedValue, arrayJSONInputValue[j], stringStateSelected);

					stringHTMLInput += "<option value='" + arrayJSONInputValue[j] + "' " + stringAttributeState + ">" + arrayJSONInputText[j] + "</option>";
				}

				stringHTMLInput += "</select>";
			}
			else if (stringJSONInputType == stringInputTypeRadioButton | stringJSONInputType == stringInputTypeCheckbox)
			{
				/* RADIO BUTTON AND CHECKBOX */

				stringHTMLInput += "<div class='RadioButton'>";

				arrayJSONInputKey = stringJSONInputKey.split(stringJSONArraySeparator);
				arrayJSONInputValue = stringJSONInputValue.split(stringJSONArraySeparator);
				arrayJSONInputText = stringJSONInputPlaceholder.split(stringJSONArraySeparator);

				for (var j = 0; j < arrayJSONInputKey.length; j++)
				{
					stringAttributeState = setInputStateAttribute(arrayJSONInputSelectedValue, arrayJSONInputValue[j], stringStateChecked);

					stringHTMLInput += 
						"<input type='" + stringJSONInputType + "' id='" + arrayJSONInputKey[j] + "' " + 
						"name='" + stringJSONInputName + "' value='" + arrayJSONInputValue[j] + "' " + 
						stringAttributeState + " " + stringDataFormulaKey + "='" + stringJSONInputFormulaKey + "' />";
					stringHTMLInput += "<label for='" + arrayJSONInputKey[j] + "'>" + arrayJSONInputText[j] + "</label>";
				}

				stringHTMLInput += "</div>";
			}
			else
			{
				/* TEXT BASED INPUT */

				stringHTMLInput += 
					"<input type='" + stringJSONInputType + "' " + 
					"id='" + stringJSONInputKey + "' " + 
					"class='" + stringJSONInputWidth + "' " + 
					"name='" + stringJSONInputName + "' " + 
					"placeholder='" + stringJSONInputPlaceholder + "' " + 
					"value='" + stringJSONInputValue + "' " + 
					stringJSONInputState + "='true' " + 
					stringDataValidationType + "='" + stringJSONInputValidationType + "' " + 
					stringDataErrorMessage + "='" + stringJSONInputValidationName + "' " + 
					stringDataFormulaKey + "='" + stringJSONInputFormulaKey + "' />";
			}
		}
		else
		{

		}

		$(stringKres + stringJSONInputQuestionKey).append(stringHTMLInput);
	}
};

function setInputStateAttribute(arrayJSONInputSelectedValue, arrayJSONInputValue, stringState)
{
	var stringAttribute;
	if (arrayJSONInputSelectedValue != "")
	{
		for (var k = 0; k < arrayJSONInputSelectedValue.length; k++)
		{
			if (arrayJSONInputSelectedValue[k] == arrayJSONInputValue)
			{
				stringAttribute = stringState;
				k = arrayJSONInputSelectedValue.length;
			}
			else
			{
				
			}
		}
	}
	else
	{

	}

	return stringAttribute;
}


// TABLE GENERATOR

function tableGenerator(JSONInput)
{
	/* INITIALIZE */

	JSONAttribute = JSONInput.attribute;
	var stringJSONAttributeTableKey;
	var stringJSONAttributeFiedlsetKey;
	var stringJSONAttributeTableHeaderKey;
	var stringJSONAttributeTableBodyKey;
	var stringJSONAttributeTableFooterKey;
	var stringJSONAttributeTableOrder;
	var stringJSONAttributeTableState;
	var stringHTMLTable = "";

	JSONAttribute = JSONSort(JSONAttribute, "tableOrder");

	/* TABLE THEAD, TBODY, TFOOT */

	for (var i = 0; i < JSONAttribute.length; i++)
	{
		stringJSONAttributeTableKey = JSONAttribute[i].tableKey;
		stringJSONAttributeFieldsetKey = JSONAttribute[i].fieldsetKey;
		stringJSONAttributeTableHeaderKey = JSONAttribute[i].tableHeaderKey;
		stringJSONAttributeTableBodyKey = JSONAttribute[i].tableBodyKey;
		stringJSONAttributeTableFooterKey = JSONAttribute[i].tableFooterKey;
		stringJSONAttributeTableOrder = JSONAttribute[i].tableOrder;
		stringJSONAttributeTableState = JSONAttribute[i].tableState;

		if (stringJSONAttributeTableState == stringStateTrue)
		{
			stringHTMLTable += "<table id='" + stringJSONAttributeTableKey + "'>";

			if (stringJSONAttributeTableHeaderKey != null | stringJSONAttributeTableHeaderKey != undefined | stringJSONAttributeTableHeaderKey != "")
			{
				stringHTMLTable += "<thead id='" + stringJSONAttributeTableHeaderKey + "'></thead>"
			}
			else
			{

			}

			if (stringJSONAttributeTableBodyKey != null | stringJSONAttributeTableBodyKey != undefined | stringJSONAttributeTableBodyKey != "")
			{
				stringHTMLTable += "<tbody id='" + stringJSONAttributeTableBodyKey + "'></tbody>"
			}
			else
			{

			}

			if (stringJSONAttributeTableFooterKey != null | stringJSONAttributeTableFooterKey != undefined | stringJSONAttributeTableFooterKey != "")
			{
				stringHTMLTable += "<tfoot id='" + stringJSONAttributeTableFooterKey + "'></tfoot>"
			}
			else
			{

			}

			stringHTMLTable += "</table>";
		}
		else
		{

		}	
	}

	$(stringKres + stringJSONAttributeFieldsetKey).append(stringHTMLTable);

	tableRowGenerator(JSONInput.row);
	tableColumnGenerator(JSONInput.column);
}

function tableRowGenerator(JSONInput)
{
	/* INITIALIZE */

	var stringJSONInputRowKey;
	var stringJSONInputSectionKey;
	var stringJSONInputRowOrder;
	var stringJSONInputRowState;
	var stringHTMLRow;

	JSONInput = JSONSort(JSONInput, "rowOrder");

	/* TABLE TR */

	for (var i = 0; i < JSONInput.length; i++)
	{
		stringJSONInputRowKey = JSONInput[i].rowKey;
		stringJSONInputSectionKey = JSONInput[i].sectionKey;
		stringJSONInputRowOrder = JSONInput[i].rowOrder;
		stringJSONInputTableState = JSONInput[i].rowState;
		stringHTMLRow = "";

		if (stringJSONInputTableState == stringStateTrue)
		{
			stringHTMLRow = "<tr id='" + stringJSONInputRowKey + "'></tr>";
			$(stringKres + stringJSONInputSectionKey).append(stringHTMLRow);
		}
		else
		{
			
		}
	}
}

function tableColumnGenerator(JSONInput)
{
	/* INITIALIZE */

	var stringJSONInputColumnKey;
	var stringJSONInputRowKey;
	var stringJSONInputColumnValue;
	var stringJSONInputRowSpan;
	var stringJSONInputColumnSpan;
	var stringJSONInputColumnOrder;
	var stringJSONInputColumnState;
	var elementTableHeaderRow;
	var stringHTMLColumn;

	JSONInput = JSONSort(JSONInput, "columnOrder");

	/* TABLE TH / TD */

	for (var i = 0; i < JSONInput.length; i++)
	{
		stringJSONInputColumnKey = JSONInput[i].columnKey;
		stringJSONInputRowKey = JSONInput[i].rowKey;
		stringJSONInputColumnValue = JSONInput[i].columnValue;
		stringJSONInputRowSpan = JSONInput[i].rowSpan;
		stringJSONInputColumnSpan = JSONInput[i].columnSpan;
		stringJSONInputColumnOrder = JSONInput[i].columnOrder;
		stringJSONInputColumnState = JSONInput[i].columnState;

		if (stringJSONInputTableState == stringStateTrue)
		{
			stringHTMLColumn = 
				"<td id='" + stringJSONInputColumnKey + "' rowspan='" + stringJSONInputRowSpan + "' " + 
				"colspan='" + stringJSONInputColumnSpan + "'>" + stringJSONInputColumnValue + "</td>";
			$(stringKres + stringJSONInputRowKey).append(stringHTMLColumn);
		}
		else
		{
			
		}
	}
}


// FORMULA

function formulaGenerator(JSONFormulaRAW)
{
	/* INITIALIZE */

	var JSONFormula = JSONFormulaRAW.formula;
	var stringJSONFormulaKey;
	var stringJSONFormulaContent;
	var stringJSONFormulaKey;
	var stringJSONFormulaState;
	var arrayJSONFormulaContent = [];
	var arrayJSONFormulaValue = [];

	var JSONConstant = JSONFormulaRAW.constant;
	var stringJSONConstantKey;
	var stringJSONConstantTableHeader;
	var stringJSONConstantTableKey;
	var stringJSONConstantOperator;
	var stringJSONConstantState;
	var arrayJSONConstantTableHeader = [];
	var arrayJSONConstantInputValue = [];
	var arrayJSONConstantFormulaOperator = [];

	var JSONTable = JSONFormulaRAW.table;
	var JSONTableSelected;
	var arrayJSONTableSelectedKey = [];
	var arrayJSONTableSelectedValue = [];
	var arrayJSONConstantFormulaValue = [];


	/* INPUT LISTENER */

	$("input,select,textarea").each(function()
	{
		var stringFormulaKey = $(this).attr(stringDataFormulaKey);
		
		if (stringFormulaKey == null | stringFormulaKey == undefined | stringFormulaKey == "")
		{

		}
		else
		{
			$(this).change(function()
			{
				arrayJSONFormulaContent = [];
				arrayJSONFormulaValue = [];
				arrayJSONConstantTableHeader = [];
				arrayJSONConstantInputValue = [];
				arrayJSONConstantFormulaOperator = [];
				arrayJSONTableSelectedKey = [];
				arrayJSONTableSelectedValue = [];
				arrayJSONConstantFormulaValue = [];

				/* READ JSON */

				for (var i = 0; i < JSONFormula.length; i++)
				{
					stringJSONFormulaKey = JSONFormula[i].formulaKey;
					stringJSONFormulaState = JSONFormula[i].formulaState;

					if (stringJSONFormulaState == stringStateTrue && stringJSONFormulaKey == stringFormulaKey)
					{
						stringJSONFormulaContent = JSONFormula[i].formulaContent;
						stringJSONFormulaKey = JSONFormula[i].inputKey;
						arrayJSONFormulaContent = stringJSONFormulaContent.split(stringJSONArraySeparator);
						arrayJSONFormulaValue = arrayJSONFormulaContent;

						/* FORMULA LISTENER */

						for (var j = 0; j < arrayJSONFormulaContent.length; j++)
						{
							if (indicatorPrefix(arrayJSONFormulaContent[j]) == stringStateInput)
							{
								/* GET VALUE FROM UI */

								arrayJSONFormulaValue[j] = getGeneralInputForm(arrayJSONFormulaContent[j]);
							}
							else if (indicatorPrefix(arrayJSONFormulaContent[j]) == stringStateConstant)
							{
								/* GET VALUE FROM CONSTANT */

								for (var k = 0; k < JSONConstant.length; k++)
								{
									stringJSONConstantKey = JSONConstant[k].constantKey;
									stringJSONConstantState = JSONConstant[k].constantState;

									if (stringJSONConstantState == stringStateTrue && stringJSONConstantKey == arrayJSONFormulaContent[j])
									{
										stringJSONConstantTableKey = JSONConstant[k].tableKey;
										stringJSONConstantTableHeader = JSONConstant[k].tableHeader;
										stringJSONConstantOperator = JSONConstant[k].constantOperator;
										
										arrayJSONConstantTableHeader = stringJSONConstantTableHeader.split(stringJSONArraySeparator);
										arrayJSONConstantOperator = stringJSONConstantOperator.split(stringJSONArraySeparator);

										/* TABLE FILTER */

										for (var l = 0; l < JSONTable.length; l++)
										{
											stringJSONTableKey = JSONTable[l].tableKey;
											stringJSONTableState = JSONTable[l].tableState;

											if (stringJSONTableState == stringStateTrue && stringJSONTableKey == stringJSONConstantTableKey)
											{
												JSONTableSelected = JSONTable[l].tableContent;
											}
											else
											{

											}
										}

										/* SELECTED TABLE */
										
										if (JSONTableSelected == null | JSONTableSelected == undefined | JSONTableSelected == "")
										{

										}
										else
										{
											/* GET INPUT VALUE AND TABLE KEY */
											
											for (var m = 0; m < arrayJSONConstantTableHeader.length; m++)
											{
												arrayJSONTableSelectedKey[m] = releaseInfix(releasePrefix(arrayJSONConstantTableHeader[m])).toLowerCase();

												if (indicatorPrefix(arrayJSONConstantTableHeader[m]) == stringStateInput)
												{
													arrayJSONConstantFormulaValue[m] = getGeneralInputForm(arrayJSONConstantTableHeader[m]);
												}
												else
												{

												}
											}

											/* QUERY TABLE WITH KEY AND VALUE */

											for (var m = 0; m < JSONTableSelected.length; m++)
											{
												var booleanEquals = true;
												var stringEquation = "";
												
												for (var n = 0; n < arrayJSONTableSelectedKey.length; n++)
												{
													arrayJSONTableSelectedValue[n] = eval("JSONTableSelected[" + m + "]." + arrayJSONTableSelectedKey[n]);

													if($.isNumeric(arrayJSONConstantFormulaValue[n]) == true && $.isNumeric(arrayJSONTableSelectedValue[n]) == true)
													{
														stringEquation = "parseInt(arrayJSONConstantFormulaValue[" + n + "], 10) " + arrayJSONConstantOperator[n] + " parseInt(arrayJSONTableSelectedValue[" + n + "], 10)";
													}
													else
													{
														stringEquation = "arrayJSONConstantFormulaValue[" + n + "] " + arrayJSONConstantOperator[n] + " arrayJSONTableSelectedValue[" + n + "]";
													}
													
													if (eval(stringEquation))
													{
														
													}
													else
													{
														booleanEquals = false;
													}
												}

												if (booleanEquals == true)
												{
													arrayJSONFormulaValue[j] = JSONTableSelected[m].value;
													l = JSONTableSelected.length;
												}
												else
												{
													
												}
											}
										}
									}
									else
									{

									}
								}
							}
							else
							{

							}
						}

						// alert(arrayJSONFormulaValue.join(" "));
						$(stringKres + stringJSONFormulaKey).val(eval(arrayJSONFormulaValue.join(" ")));
					}
					else
					{
						
					}
				}
			});
		}
	});
}

function formulaTableGenerator(JSONFormulaRAW)
{
	/* INITIALIZE */

	var JSONFormula = JSONFormulaRAW.formula;
	var stringJSONFormulaKey;
	var stringJSONFormulaContent;
	var stringJSONFormulaInputKey;
	var stringJSONFormulaState;
	var stringJSONFormulaKeyWithoutPrefix;
	var arrayJSONFormulaContent = [];
	var arrayJSONFormulaValue = [];
	var stringRowJavaScriptID;
	var stringColumnJavaScriptID;

	var JSONConstant = JSONFormulaRAW.constant;
	var stringJSONConstantKey;
	var stringJSONConstantTableHeader;
	var stringJSONConstantTableKey;
	var stringJSONConstantOperator;
	var stringJSONConstantState;
	var arrayJSONConstantTableHeader = [];
	var arrayJSONConstantInputValue = [];
	var arrayJSONConstantOperator = [];

	var JSONTable = JSONFormulaRAW.table;
	var JSONTableSelected;
	var arrayJSONTableSelectedKey = [];
	var arrayJSONTableSelectedValue = [];
	var arrayJSONConstantFormulaValue = [];

	var intColumnID;
	
	for (var i = 0; i < JSONFormula.length; i++)
	{
		stringJSONFormulaState = JSONFormula[i].formulaState;
		stringJSONFormulaKey = JSONFormula[i].formulaKey;
		stringJSONFormulaKeyWithoutPrefix = releasePrefix(stringJSONFormulaKey);

		if (stringJSONFormulaState == stringStateTrue && getPrefix(stringJSONFormulaKeyWithoutPrefix) == stringPrefixTable)
		{
			$(stringKres + stringJSONFormulaKeyWithoutPrefix + " tbody tr").each(function()
			{
				stringJSONFormulaContent = JSONFormula[i].formulaContent;
				stringJSONFormulaInputKey = JSONFormula[i].inputKey;
				arrayJSONFormulaContent = stringJSONFormulaContent.split(stringJSONArraySeparator);
				arrayJSONFormulaValue = arrayJSONFormulaContent;
				stringRowJavaScriptID = $(this).attr("id");
				intColumnID = stringRowJavaScriptID.substring("RowRiderBody".length, stringRowJavaScriptID.length);
				
				$(stringKres + stringRowJavaScriptID + " td").each(function()
				{
					stringColumnJavaScriptID = $(this).attr("id");

					if (stringColumnJavaScriptID.substring(0, stringJSONFormulaInputKey.length) == stringJSONFormulaInputKey)
					{
						/* FORMULA LISTENER */
						
						for (var j = 0; j < arrayJSONFormulaContent.length; j++)
						{
							if (indicatorPrefix(arrayJSONFormulaContent[j]) == stringStateInput)
							{
								/* GET VALUE FROM UI */
								
								arrayJSONFormulaValue[j] = getGeneralInputForm(arrayJSONFormulaContent[j]);
							}
							else if (indicatorPrefix(arrayJSONFormulaContent[j]) == stringStateTable)
							{
								/* GET VALUE FROM TABLE */

								arrayJSONFormulaValue[j] = $(this).text();
							}
							else if (indicatorPrefix(arrayJSONFormulaContent[j]) == stringStateConstant)
							{
								/* GET VALUE FROM CONSTANT */

								for (var k = 0; k < JSONConstant.length; k++)
								{
									stringJSONConstantKey = JSONConstant[k].constantKey;
									stringJSONConstantState = JSONConstant[k].constantState;

									if (stringJSONConstantState == stringStateTrue && stringJSONConstantKey == arrayJSONFormulaContent[j])
									{
										stringJSONConstantTableKey = JSONConstant[k].tableKey;
										stringJSONConstantTableHeader = JSONConstant[k].tableHeader;
										stringJSONConstantOperator = JSONConstant[k].constantOperator;
										
										arrayJSONConstantTableHeader = stringJSONConstantTableHeader.split(stringJSONArraySeparator);
										arrayJSONConstantOperator = stringJSONConstantOperator.split(stringJSONArraySeparator);
										
										/* TABLE FILTER */

										for (var l = 0; l < JSONTable.length; l++)
										{
											stringJSONTableKey = JSONTable[l].tableKey;
											stringJSONTableState = JSONTable[l].tableState;

											if (stringJSONTableState == stringStateTrue && stringJSONTableKey == stringJSONConstantTableKey)
											{
												JSONTableSelected = JSONTable[l].tableContent;
											}
											else
											{

											}
										}

										/* SELECT TABLE */
										
										if (JSONTableSelected == null | JSONTableSelected == undefined | JSONTableSelected == "")
										{

										}
										else
										{
											/* GET INPUT VALUE AND TABLE KEY */
											
											for (var m = 0; m < arrayJSONConstantTableHeader.length; m++)
											{
												arrayJSONTableSelectedKey[m] = releaseInfix(releasePrefix(arrayJSONConstantTableHeader[m])).toLowerCase();

												if (indicatorPrefix(arrayJSONConstantTableHeader[m]) == stringStateInput)
												{
													arrayJSONConstantFormulaValue[m] = getGeneralInputForm(arrayJSONConstantTableHeader[m]);
												}
												else if (indicatorPrefix(arrayJSONConstantTableHeader[m]) == stringStateTable)
												{
													arrayJSONConstantFormulaValue[m] = $(stringKres + arrayJSONConstantTableHeader[m] + intColumnID).text();
												}
												else
												{

												}
											}

											/* QUERY TABLE WITH KEY AND VALUE */
											
											for (var m = 0; m < JSONTableSelected.length; m++)
											{
												var booleanEquals = true;
												var stringEquation = "";

												for (var n = 0; n < arrayJSONTableSelectedKey.length; n++)
												{
													arrayJSONTableSelectedValue[n] = eval("JSONTableSelected[" + m + "]." + arrayJSONTableSelectedKey[n]);

													if($.isNumeric(arrayJSONConstantFormulaValue[n]) == true && $.isNumeric(arrayJSONTableSelectedValue[n]) == true)
													{
														stringEquation = "parseInt(arrayJSONConstantFormulaValue[" + n + "], 10) " + arrayJSONConstantOperator[n] + " parseInt(arrayJSONTableSelectedValue[" + n + "], 10)";
													}
													else
													{
														stringEquation = "arrayJSONConstantFormulaValue[" + n + "] " + arrayJSONConstantOperator[n] + " arrayJSONTableSelectedValue[" + n + "]";
													}

													if (eval(stringEquation))
													{
														
													}
													else
													{
														booleanEquals = false;
													}
												}

												if (booleanEquals == true)
												{
													arrayJSONFormulaValue[j] = JSONTableSelected[m].value;
													l = JSONTableSelected.length;
												}
												else
												{
													
												}
											}
										}
									}
									else
									{

									}
								}
							}
							else
							{
								
							}
						}

						// alert(arrayJSONFormulaValue.join(" "));
						$(stringKres + stringJSONFormulaInputKey + intColumnID).text(eval(arrayJSONFormulaValue.join(" ")));
					}
					else
					{

					}
				});
			});
		}
		else
		{

		}
	}
}