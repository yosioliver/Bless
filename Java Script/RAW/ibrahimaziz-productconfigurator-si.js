// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life Bless
// http://www.infoconnect.com.my


// JSON

function JSONSort(JSONData, stringJSONDataKey) 
{
    return JSONData.sort(function (stringJSONDataFirst, stringJSONDataSecond) 
    {
        var stringJSONDataValueFirst = stringJSONDataFirst[stringJSONDataKey];
        var stringJSONDataValueSecond = stringJSONDataSecond[stringJSONDataKey];
        return ((stringJSONDataValueFirst < stringJSONDataValueSecond) ? -1 : ((stringJSONDataValueFirst > stringJSONDataValueSecond) ? 1 : 0));
    });
}


// GENERATE FIELDSET

function fieldsetGenerator(JSONFieldset, stringLayoutJavaScriptID)
{
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
		stringJSONFieldsetKey = JSONFieldset[i].fieldsetKey;
		stringJSONFieldsetLegend = JSONFieldset[i].fieldsetLegend;
		stringJSONFieldsetOrder = JSONFieldset[i].fieldsetOrder;
		stringJSONFieldsetState = JSONFieldset[i].fieldsetState;

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

	elementForm.innerHTML = stringHTMLFieldset;
};


// GENERATE QUESTION

function questionGenerator(JSONQuestion)
{
	var stringJSONQuestionKey;
	var stringJSONQuestionFieldsetKey;
	var stringJSONQuestionOrder;
	var stringJSONQuestionState;
	var stringHTMLQuestion;

	JSONQuestion = JSONSort(JSONQuestion, "questionOrder");

	for (var i = 0; i < JSONQuestion.length; i++)
	{
		stringJSONQuestionKey = JSONQuestion[i].questionKey;
		stringJSONQuestionOrder = JSONQuestion[i].questionOrder;
		stringJSONQuestionState = JSONQuestion[i].questionState;
		stringJSONQuestionFieldsetKey = JSONQuestion[i].fieldsetKey;
		stringHTMLQuestion = "";

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
	var stringHTMLInput
	var elementQuestion;
	var arrayJSONInputValue;
	var arrayJSONInputText;
	var arrayJSONInputKey;
	var stringJSONInputWidth;
	var stringJSONInputKeyTemporary;

	JSONInput = JSONSort(JSONInput, "inputOrder");

	for (var i = 0; i < JSONInput.length; i++)
	{
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

		if (stringJSONInputState != stringStateFalse)
		{
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

			if (stringJSONInputType == stringInputTypeSelect)
			{
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
					stringHTMLInput += "<option value='" + arrayJSONInputValue[j] + "'>" + arrayJSONInputText[j] + "</option>";
				}

				stringHTMLInput += "</select>";
			}
			else if (stringJSONInputType == stringInputTypeRadioButton | stringJSONInputType == stringInputTypeCheckbox)
			{
				stringHTMLInput += "<div class='RadioButton'>";

				arrayJSONInputKey = stringJSONInputKey.split(stringJSONArraySeparator);
				arrayJSONInputValue = stringJSONInputValue.split(stringJSONArraySeparator);
				arrayJSONInputText = stringJSONInputPlaceholder.split(stringJSONArraySeparator);

				for (var j = 0; j < arrayJSONInputKey.length; j++)
				{
					stringHTMLInput += "<input type='" + stringJSONInputType + "' id='" + arrayJSONInputKey[j] + "' name='" + stringJSONInputName + "' value='" + arrayJSONInputValue[j] + "'/>";
					stringHTMLInput += "<label for='" + arrayJSONInputKey[j] + "'>" + arrayJSONInputText[j] + "</label>";
				}

				stringHTMLInput += "</div>";
			}
			else
			{
				stringHTMLInput += 
					"<input type='" + stringJSONInputType + "' " + 
					"id='" + stringJSONInputKey + "' " + 
					"class='" + stringJSONInputWidth + "' " + 
					"name='" + stringJSONInputName + "' " + 
					"placeholder='" + stringJSONInputPlaceholder + "' " + 
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