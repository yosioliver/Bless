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

	fieldsetGenerator(JSONInput.fieldset, "formMain");
	questionGenerator(JSONInput.question);
	inputGenerator(JSONInput.input);
	tableGenerator(JSONInput.table);
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
			if (stringJSONFieldsetLegend.length > 0)
			{
				stringHTMLFieldset += "<fieldset id='" + stringJSONFieldsetKey + "'><legend>" + stringJSONFieldsetLegend + "</legend><ul></ul></fieldset>";
			}
			else
			{
				stringHTMLFieldset += "<fieldset id='" + stringJSONFieldsetKey + "'><ul></ul></fieldset>";
			}
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
		stringHTMLInput = "";
		arrayJSONInputState = "";
		arrayJSONInputSelectedValue = "";
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
					stringDataErrorMessage + "='" + stringJSONInputValidationName + "'>";

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

					stringHTMLInput += "<input type='" + stringJSONInputType + "' id='" + arrayJSONInputKey[j] + "' name='" + stringJSONInputName + "' value='" + arrayJSONInputValue[j] + "' " + stringAttributeState + "/>";
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
					stringDataErrorMessage + "='" + stringJSONInputValidationName + "'/>";
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

function tableGenerator(JSONInput, stringLayoutJavaScriptID)
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

	for (var i = 0; i < JSONInput.length; i++)
	{
		stringJSONInputRowKey = JSONInput[i].rowKey;
		stringJSONInputSectionKey = JSONInput[i].sectionKey;
		stringJSONInputRowOrder = JSONInput[i].rowOrder;
		stringJSONInputTableState = JSONInput[i].rowState;
		stringHTMLRow = "";

		if (stringJSONInputTableState == stringStateTrue)
		{
			stringHTMLRow += "<tr id='" + stringJSONInputRowKey + "'></tr>";
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
			stringHTMLColumn += "<td id='" + stringJSONInputRowKey + "' rowspan='" + stringJSONInputRowSpan + "' colspan='" + stringJSONInputColumnSpan + "'>" + stringJSONInputColumnValue + "</tr>";
			$(stringKres + stringJSONInputRowKey).append(stringHTMLColumn);
		}
		else
		{
			
		}
	}
}