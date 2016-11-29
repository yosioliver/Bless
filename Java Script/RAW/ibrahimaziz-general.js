// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life Bless
// http://www.infoconnect.com.my


// INTIALIZATION

/* JQUERY */

var stringKres = "#";
var stringDot = ".";

/* SEPARATOR */

var stringJSONArraySeparator = ",";
var stringJSONStateSeparator = "|";

/* STATE */

var stringStateNotChecked = "Not Checked";
var stringStateNotSelected = "Not Selected";
var stringStateRequired = "required";
var stringStateTrue = "true";
var stringStateFalse = "false";
var stringStateEnable = "enable";
var stringStateReadOnly = "readonly";
var stringStateChecked = "checked";
var stringStateSelected = "selected";
var stringStateDisable = "disabled";
var stringStateRequired = "required";
var stringStateInput = "input";
var stringStateTable = "table";

/* STRING */

var stringCheckboxSeparator = ", ";
var stringDateHTMLSeparator = "-";
var stringDateJQuerySeparator = "/";

/* PREFIX */

var stringPrefixText = "Text";
var stringPrefixRadioButton = "RadioButton";
var stringPrefixSelect = "Select";
var stringPrefixCheckbox = "Checkbox";
var stringPrefixDate = "Date";
var stringPrefixArea = "Area";
var stringPrefixNumber = "Number";
var stringPrefixEmail = "Email";
var stringPrefixTelephone = "Telephone";

var stringPrefixTable = "Table";
var stringPrefixRow = "Row";
var stringPrefixColumn = "Column";

/* INFIX */

var stringInfixProspectiveInsured = "ProspectiveInsured";
var stringInfixPolicyHolder = "PolicyHolder";
var stringInfixBeneficiariesList = "BeneficiariesList";

/* JSON */

var stringJSONKey = "key";
var stringJSONValue = "value";

/* VALIDATION TYPE */

var stringValidationTypeEmail = "email";
var stringValidationTypeAlphabet = "alphabet";
var stringValidationTypeNumeric = "numeric";
var stringValidationTypeAlphaNumeric = "alphanumeric";
var stringValidationTypeSpecialCharacter = "specialcharacter";
var stringValidationTypeTelephone = "telephone";
var stringValidationTypeHandphone = "handphone";

/* INPUT TYPE */

var stringInputTypeText = "text";
var stringInputTypeRadioButton = "radio";
var stringInputTypeCheckbox = "checkbox";
var stringInputTypeSelect = "select";
var stringInputTypeArea = "textarea";
var stringInputTypeNumber = "number";
var stringInputTypeEmail = "email";
var stringInputTypeTel = "tel";
var stringInputTypeDate = "date";

/* ERROR MESSAGE */

var stringMessageGeneralIncomplete = "Harap lengkapi form terlebih dahulu !.";

/* DATA ATTRIBUTE */

var stringDataErrorTitle = "data-error-title";
var stringDataErrorMessage = "data-error-message";
var stringDataValidationType = "data-validation-type";

/* REGULAR EXPRESSION */

var regularExpressionAlphabet = /^[a-zA-Z\s]*$/;
var regularExpressionAlphaNumeric = /^[a-zA-Z0-9\s]*$/;
var regularExpressionNumeric = /^[0-9\s]*$/;
var regularExpressionEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


// JSON

function JSONAdd(JSONInput, stringInputKey, stringInputValue)
{
    var booleanStatePush = true;
    var booleanStateDelete = false;
    
    if (JSONInput.length > 0)
    {
        for (var i = 0; i < JSONInput.length; i++)
        {
            if (JSONInput[i].key == stringInputKey)
            {
            	if (stringInputValue == "")
            	{
            		booleanStateDelete = true;
            	}
            	else
            	{
        			JSONInput[i].value = stringInputValue;
                }

                booleanStatePush = false;
            }
            else
            {

            }
        }

        if (booleanStatePush == true)
        {
            JSONInput.push({ key: stringInputKey, value: stringInputValue });
        }
        else
        {

        }

        if (booleanStateDelete == true)
        {
            JSONDelete(JSONInput, stringInputKey);
        }
        else
        {

        }
    }
    else
    {
        JSONInput.push({ key: stringInputKey, value: stringInputValue });
    }
}

function JSONDelete(JSONInput, stringInputKey)
{
    for (var i = 0; i < JSONInput.length; i++)
    {
        if (JSONInput[i].key === stringInputKey) 
        {
            JSONInput.splice(i, 1);
            break;
        }
        else
        {
            
        }
    }
}

function JSONFind(JSONInput, stringInputKey)
{
    var stringInputValue = null;
    
    for (var i = 0; i < JSONInput.length; i++)
    {
        if (JSONInput[i].key === stringInputKey) 
        {
            stringInputValue = JSONInput[i].value;
            break;
        }
        else
        {
            
        }
    }
    
    return stringInputValue;
}

function JSONEmptyPush(JSONInput, stringInputKey, stringInputValue)
{
    if (stringInputValue == undefined || stringInputValue == null)
    {
        
    }
    else
    {
        JSONAdd(JSONInput, stringInputKey, stringInputValue);
    }
}

function JSONValidatePush(JSONInput, stringInputKey, stringInputValue)
{
    if (stringInputValue == undefined || stringInputValue == null || stringInputValue == "")
    {
        
    }
    else
    {
        JSONAdd(JSONInput, stringInputKey, stringInputValue);
    }
}

function JSONTransfer(JSONTemporary, JSONInput)
{
	var stringJSONTemporaryKey;
	var stringJSONTemporaryValue;
	var stringJSONInputKey;
	var stringJSONInputValue;
	var booleanStatePush = true;
	var booleanStateDelete = false;

	for (var i = 0; i < JSONTemporary.length; i++)
	{
		stringJSONTemporaryKey = JSONTemporary[i].key;
		stringJSONTemporaryValue = JSONTemporary[i].value;

		for (var j = 0; j < JSONInput.length; j++)
		{
			stringJSONInputKey = JSONInput[j].key;
			stringJSONInputValue = JSONInput[j].value;

			if (stringJSONTemporaryKey == stringJSONInputKey)
			{
				if (stringJSONTemporaryValue == "")
				{
					JSONDelete(JSONInput, stringJSONInputKey);
					booleanStatePush = false;
					break;
				}
				else
				{
					
				}
			}
			else
			{
				
			}
		}
		
		if (booleanStatePush == true)
		{
			JSONValidatePush(JSONInput, stringJSONTemporaryKey, stringJSONTemporaryValue);
		}
		else
		{

		}
	}

	return JSONInput;
}

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


// VALIDATE

/* INPUT TYPE */

function validateTextGeneral(stringInputValue)
{
	if (stringInputValue == undefined || stringInputValue == null || stringInputValue == "")
	{
		return false;
	}
	else
	{
		return true;
	}
}

function validateRadioButtonGeneral(stringInputValue)
{
	if (stringInputValue == undefined || stringInputValue == null || stringInputValue == "" || stringInputValue == stringStateNotChecked)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function validateSelectGeneral(stringInputValue)
{
	if (stringInputValue == undefined || stringInputValue == null || stringInputValue == "" || stringInputValue == stringStateNotSelected)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function validateCheckboxGeneral(stringInputValue)
{
	if (stringInputValue == undefined || stringInputValue == null || stringInputValue == "" || stringInputValue == stringStateNotChecked)
	{
		return false;
	}
	else
	{
		return true;
	}
}

/* INPUT FIELD */

function validateAlphabet(stringInputValue)
{
	return stringInputValue.test(regularExpressionAlphabet);
}

function validateAlphaNumeric(stringInputValue)
{
	return stringInputValue.test(regularExpressionAlphaNumeric);
}

function validateNumeric(stringInputValue)
{
	return stringInputValue.test(regularExpressionNumeric);
}

function validateEmail(stringInputValue)
{
	return stringInputValue.test(regularExpressionEmail);
}

function validateBirthDate(stringInputValue)
{
	stringInputValue = stringInputValue.replace(/-/g, stringDateJQuerySeparator);

    var stringCurrentRAWDate = new Date();
    var stringCurrentFormattedDate = 
    	stringCurrentRAWDate.getFullYear() + stringDateJQuerySeparator + 
    	(stringCurrentRAWDate.getMonth() + 1) + stringDateJQuerySeparator + 
    	stringCurrentRAWDate.getDate();
    
    if (stringInputValue.length > 0)
    {
		if(stringInputDate > stringCurrentFormattedDate)
		{
			return false;
		}
		else
		{
			return true;
		}
    }
    else
    {
    	return false;
    }
}


// SETTER GENERAL

function setGeneralInputBasic(stringInputJavaScriptID, stringInputValue)
{
	var stringInputJQueryID = stringKres + stringInputJavaScriptID;
    
    $(stringInputJQueryID).val(stringInputValue);
}

/* FORM */

function setGeneralTextForm(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue)
}

function setGeneralRadioButtonForm(stringInputName, stringInputValue)
{
    if (stringValue != null)
	{
		$("input:radio[name=" + stringInputName + "]");
    	elementRadioButton.filter("[value='" + stringInputValue + "']").prop("checked", true);
	}
	else
	{
		$("input:radio[name='" + stringInputName + "']").each(function()
		{
			$(this).prop("checked", false);
		});
	}
}

function setGeneralSelectForm(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralCheckboxForm(stringInputName, arrayInputValue)
{
	if (arrayInputValue.length > 0)
	{
		for (var i = 0; i < arrayInputValue.length; i++)
		{
			$("input:checkbox[name='" + stringInputName + "'][value='" + arrayInputValue[i] + "']").prop("checked",true);
		}
	}
	else
	{

	}
}

function setGeneralDateForm(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralAreaForm(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralNumberForm(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralEmailForm(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralTelephoneForm(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

/* PDF */

function setGeneralTextPDF(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralRadioButtonPDF(stringInputName, stringInputValue)
{
    setGeneralInputBasic(stringInputName, stringInputValue);
}

function setGeneralSelectPDF(stringInputJavaScriptID, stringInputValue)
{
	setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralCheckboxPDF(stringInputJavaScriptID, stringInputValue)
{
	var stringInputJQueryID = stringKres + stringInputJavaScriptID;
    var stringInputValueTemporary = $(stringInputJQueryID).val();
    var arrayInputValue = stringInputValue.split(",");

    for (var i = 0; i < arrayInputValue.length; i++)
    {
    	if (i == 0)
    	{
    		stringInputValueTemporary += arrayInputValue[i];
    	}
    	else
    	{
    		stringInputValueTemporary += (stringCheckboxSeparator + arrayInputValue[i]);
    	}
    }
    
	$(stringInputJQueryID).val(stringInputValueTemporary);
}

function setGeneralDatePDF(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralAreaPDF(stringInputJavaScriptID, stringInputValue)
{
	setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralNumberPDF(stringInputJavaScriptID, stringInputValue)
{
	setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralEmailPDF(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}

function setGeneralTelephonePDF(stringInputJavaScriptID, stringInputValue)
{
    setGeneralInputBasic(stringInputJavaScriptID, stringInputValue);
}


// GETTER GENERAL

function getGeneralInputBasic(stringInputJavaScriptID)
{
	var stringInputJQueryID = stringKres + stringInputJavaScriptID;

	return $(stringInputJQueryID).val();
}

function getGeneralCheckboxBasic(stringInputName)
{
	var arrayInputValue =  $("input[name='" + stringInputName + "']:checked").map(function()
	{
    	return this.value;
	}).get();

	return arrayInputValue;
}

/* FORM */

function getGeneralTextForm(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralRadioButtonForm(stringInputName)
{
	var stringInputValue;
    
    stringInputValue = $("input:radio[name=" + stringInputName + "]:checked").val();
    
    if (stringInputValue == null || stringInputValue == undefined || stringInputValue == "")
    {
    	stringInputValue = stringStateNotChecked;
    }
    else
    {

    }

    return stringInputValue;
}

function getGeneralSelectForm(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralCheckboxForm(stringInputName)
{
	return getGeneralCheckboxBasic(stringInputName);
}

function getGeneralDateForm(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralAreaForm(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralNumberForm(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralEmailForm(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralTelephoneForm(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

/* PDF */

function getGeneralTextPDF(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralRadioButtonPDF(stringInputName)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralSelectPDF(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralCheckboxPDF(stringInputName)
{
	return getGeneralCheckboxBasic(stringInputName);
}

function getGeneralDatePDF(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralAreaPDF(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralNumberPDF(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralEmailPDF(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}

function getGeneralTelephonePDF(stringInputJavaScriptID)
{
	return getGeneralInputBasic(stringInputJavaScriptID);
}


// SETTER SPECIFIC

function setSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var stringInputJQueryID = stringKres + stringInputJavaScriptID;

	$(stringLayoutJQueryID + " " + stringInputJQueryID).val(stringInputValue);
}

/* FORM */

function setSpecificTextForm(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSepecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificRadioButtonForm(stringLayoutJavaScriptID, stringInputName, stringInputValue)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	
    if (stringValue != null)
	{
		var elementRadioButton = $(stringLayoutJQueryID + " input:radio[name=" + stringInputName + "]");
    	elementRadioButton.filter("[value='" + stringInputValue + "']").prop("checked", true);
	}
	else
	{
		$(stringLayoutJQueryID + " input:radio[name='" + stringInputName + "']").each(function()
		{
			$(this).prop("checked", false);
		});
	}
}

function setSpecificSelectForm(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSepecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificCheckboxForm(stringLayoutJavaScriptID, stringInputName, arrayInputValue)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	
	if (arrayInputValue.length > 0)
	{
		for (var i = 0; i < arrayInputValue.length; i++)
		{
			$(stringLayoutJQueryID + " " + "input:checkbox[name='" + stringInputName + "'][value='" + arrayInputValue[i] + "']").prop("checked",true);
		}
	}
	else
	{

	}
}

function setSpecificDateForm(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSepecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificAreaForm(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSepecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificNumberForm(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSepecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificEmailForm(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSepecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificTelephoneForm(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSepecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

/* PDF */

function setSpecificTextPDF(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
    setSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificRadioButtonPDF(stringLayoutJavaScriptID, stringInputName, stringInputValue)
{
    setSpecificInputBasic(stringLayoutJavaScriptID, stringInputName, stringInputValue);
}

function setSpecificSelectPDF(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificCheckboxPDF(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	var stringLayoutJQueryID = stringKRes + stringLayoutJavaScriptID;
	var stringInputJQueryID = stringKres + stringInputJavaScriptID;
    var stringInputValueTemporary = $(stringLayoutJQueryID + " " + stringInputJQueryID).val();
    var arrayInputValue = stringInputValue.split(",");

    for (var i = 0; i < arrayInputValue.length; i++)
    {
    	if (i == 0)
    	{
    		stringInputValueTemporary += arrayInputValue[i];
    	}
    	else
    	{
    		stringInputValueTemporary += (stringCheckboxSeparator + arrayInputValue[i]);
    	}
    }
    
	$(stringLayoutJQueryID + " " + stringInputJQueryID).val(stringInputValueTemporary);
}

function setSpecificDatePDF(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
    setSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificAreaPDF(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificNumberPDF(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
	setSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificEmailPDF(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
    setSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}

function setSpecificTelephonePDF(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue)
{
    setSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID, stringInputValue);
}


// GETTER SPECIFIC

function getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var stringInputJQueryID = stringKres + stringInputJavaScriptID;

	return $(stringLayoutJQueryID + " " + stringInputJQueryID).val();
}

function getSpecificCheckboxBasic(stringLayoutJavaScriptID, stringInputName)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

    var arrayInputValue =  $(stringLayoutJQueryID + " " + "input[name='" + stringInputName + "']:checked").map(function()
    {
		return this.value;
    }).get();

	return arrayInputValue;
}

/* FORM */

function getSpecificTextForm(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificRadioButtonForm(stringLayoutJavaScriptID, stringInputName)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var stringInputValue;
    
    stringInputValue = $(stringLayoutJQueryID + " input:radio[name=" + stringInputName + "]:checked").val();
    
    if (stringInputValue == null || stringInputValue == undefined || stringInputValue == "")
    {
    	stringInputValue = stringStateNotChecked;
    }
    else
    {

    }

    return stringInputValue;
}

function getSpecificSelectForm(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificCheckboxForm(stringLayoutJavaScriptID, stringInputName)
{
	return getSpecificCheckboxBasic(stringLayoutJavaScriptID, stringInputName);
}

function getSpecificDateForm(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificAreaForm(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificNumberForm(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificEmailForm(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificTelephoneForm(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

/* PDF */

function getSpecificTextPDF(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificRadioButtonPDF(stringLayoutJavaScriptID, stringInputName)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputName);
}

function getSpecificSelectPDF(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificCheckboxPDF(stringLayoutJavaScriptID, stringInputName)
{
	return getSpecificCheckboxBasic(stringLayoutJavaScriptID, stringInputName);
}

function getSpecificDatePDF(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificAreaPDF(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificNumberPDF(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificEmailPDF(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}

function getSpecificTelephonePDF(stringLayoutJavaScriptID, stringInputJavaScriptID)
{
	return getSpecificInputBasic(stringLayoutJavaScriptID, stringInputJavaScriptID);
}


// SETTER GENERAL PAGE

/* FORM */

function setGeneralPageForm(JSONInput)
{
	var stringJSONInputKey;
	var stringJSONInputValue;
	var stringJSONInputType;

	for (var i = 0; i < JSONInput.length; i ++)
	{
		stringJSONInputKey = JSONInput[i].key;
		stringJSONInputValue = JSONInput[i].value;
		stringJSONInputType = getPrefix(stringJSONInputKey);

		if (stringJSONInputType == stringPrefixText)
		{
			setGeneralTextForm(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixRadioButton)
		{
			setGeneralRadioButtonForm(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixSelect)
		{
			setGeneralSelectForm(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixCheckbox)
		{
			setGeneralCheckboxForm(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixDate)
		{
			setGeneralDateForm(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixArea)
		{
			setGeneralAreaForm(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixNumber)
		{
			setGeneralNumberForm(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixEmail)
		{
			setGeneralEmailForm(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixTelephone)
		{
			setGeneralTelephooneForm(stringJSONInputKey, stringJSONInputValue);
		}
		else
		{

		}
	}
}

/* PDF */

function setGeneralPagePDF(JSONInput)
{
	var stringJSONInputKey;
	var stringJSONInputValue;
	var stringJSONInputType;

	for (var i = 0; i < JSONInput.length; i ++)
	{
		stringJSONInputKey = JSONInput[i].key;
		stringJSONInputValue = JSONInput[i].value;
		stringJSONInputType = getPrefix(stringJSONInputKey);

		if (stringJSONInputType == stringPrefixText)
		{
			setGeneralTextPDF(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixRadioButton)
		{
			setGeneralRadioButtonPDF(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixSelect)
		{
			setGeneralSelectPDF(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixCheckbox)
		{
			setGeneralCheckboxPDF(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixDate)
		{
			setGeneralDatePDF(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixArea)
		{
			setGeneralAreaPDF(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixNumber)
		{
			setGeneralNumberPDF(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixEmail)
		{
			setGeneralEmailPDF(stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixTelephone)
		{
			setGeneralTelephonePDF(stringJSONInputKey, stringJSONInputValue);
		}
		else
		{

		}
	}
}

// GETTER GENERAL PAGE

/* FORM */

function getGeneralPageForm(JSONInput)
{
	var JSONTemporary = [];
	var stringInputKey;
	var stringInputName;
	var stringInputValue;
	var stringInputRequired;
	var booleanStateValidation = true;
	var stringErrorTitle;
	var stringErrorMessage;
	var stringLegendTitle;
	var stringLabelMessage;

	if (booleanStateValidation == true)
	{
		$("input[type='text']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getGeneralTextForm(stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$("input[type='radio']").each(function()
		{
			stringInputName = $(this).attr("name");
			stringInputValue = getGeneralRadioButtonForm(stringInputName);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.name+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateRadioButtonGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputName, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputName, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$("select").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getGeneralSelectForm(stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateSelectGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$("input[type='checkbox']").each(function()
		{
			stringInputKey = $(this).attr("id");
	        stringInputValue = getCheckboxGeneral(stringInputKey);
	        stringInputRequired = $(this).attr("required");
	        stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.name+"']").text();

	        if (stringInputRequired == stringStateRequired)
			{
				if (validateCheckboxGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$("input[type='date']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getGeneralDateForm(stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$("textarea").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getGeneralAreaForm(stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$("input[type='number']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getGeneralNumberForm(stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$("input[type='email']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getGeneralEmailForm(stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$("input[type='tel']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getGeneralTelephoneForm(stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		if (JSONTemporary.length > 0)
		{
			return JSONTransfer(JSONTemporary, JSONInput);
		}
		else
		{

		}
	}
	else
	{

	}
}

/* PDF */

function getGeneralPagePDF(JSONInput)
{
	var JSONTemporary = [];
	var stringInputKey;
	var stringInputValue;
	var stringInputRequired;
	var booleanStateValidation = true;
	var stringErrorTitle;
	var stringErrorMessage;
	var stringLegendTitle;
	var stringLabelMessage;

	if (booleanStateValidation == true)
	{
		$("input[type='text']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getGeneralTextForm(stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		if (JSONTemporary.length > 0)
		{
			return JSONTransfer(JSONTemporary, JSONInput);
		}
		else
		{

		}
	}
	else
	{

	}
}


// SETTER SPECIFIC PAGE

/* FORM */

function setSpecificPageForm(stringLayoutJavaScriptID, JSONInput)
{
	var stringJSONInputKey;
	var stringJSONInputValue;
	var stringJSONInputType;

	for (var i = 0; i < JSONInput.length; i ++)
	{
		stringJSONInputKey = JSONInput[i].key;
		stringJSONInputValue = JSONInput[i].value;
		stringJSONInputType = getPrefix(stringJSONInputKey);

		if (stringJSONInputType == stringPrefixText)
		{
			setSpecificTextForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixRadioButton)
		{
			setSpecificRadioButtonForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixSelect)
		{
			setSpecificSelectForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixCheckbox)
		{
			setSpecificCheckboxForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixDate)
		{
			setSpecificDateForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixArea)
		{
			setSpecificAreaForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixNumber)
		{
			setSpecificNumberForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixEmail)
		{
			setSpecificEmailForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixTelephone)
		{
			setSpecificTelephoneForm(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else
		{

		}
	}
}

/* PDF */

function setSpecificPagePDF(stringLayoutJavaScriptID, JSONInput)
{
	var stringJSONInputKey;
	var stringJSONInputValue;
	var stringJSONInputType;

	for (var i = 0; i < JSONInput.length; i ++)
	{
		stringJSONInputKey = JSONInput[i].key;
		stringJSONInputValue = JSONInput[i].value;
		stringJSONInputType = getPrefix(stringJSONInputKey);

		if (stringJSONInputType == stringPrefixText)
		{
			setSpecificTextPDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixRadioButton)
		{
			setSpecificRadioButtonPDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixSelect)
		{
			setSpecificSelectPDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixCheckbox)
		{
			setSpecificCheckboxPDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixDate)
		{
			setSpecificDatePDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixArea)
		{
			setSpecificAreaPDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixNumber)
		{
			setSpecificNumberPDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixEmail)
		{
			setSpecificEmailPDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else if (stringJSONInputType == stringPrefixTelephone)
		{
			setSpecificTelephonePDF(stringLayoutJavaScriptID, stringJSONInputKey, stringJSONInputValue);
		}
		else
		{

		}
	}
}


// GETTER SPECIFIC PAGE

/* FORM */

function getSpecificPageForm(stringLayoutJavaScriptID, JSONInput)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var JSONTemporary = [];
	var stringInputKey;
	var stringInputName;
	var stringInputValue;
	var stringInputRequired;
	var booleanStateValidation = true;
	var stringErrorTitle;
	var stringErrorMessage;
	var stringLegendTitle;
	var stringLabelMessage;

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " input[type='text']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getSpecificTextForm(stringLayoutJavaScriptID, stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " input[type='radio']").each(function()
		{
			stringInputName = $(this).attr("name");
			stringInputValue = getSpecificRadioButtonForm(stringLayoutJavaScriptID, stringInputName);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateRadioButtonGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputName, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputName, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " select").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getSpecificSelectForm(stringLayoutJavaScriptID, stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateSelectGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " input[type='checkbox']").each(function()
		{
			stringInputKey = $(this).attr("id");
	        stringInputValue = getSpecificCheckboxForm(stringLayoutJavaScriptID, stringInputKey);
	        stringInputRequired = $(this).attr("required");
	        stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

	        if (stringInputRequired == stringStateRequired)
			{
				if (validateCheckboxGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " input[type='date']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getSpecificDateForm(stringLayoutJavaScriptID, stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " textarea").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getSpecificAreaForm(stringLayoutJavaScriptID, stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " input[type='number']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getSpecificNumberForm(stringLayoutJavaScriptID, stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " input[type='email']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getSpecificEmailForm(stringLayoutJavaScriptID, stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " input[type='tel']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getSpecificTelephoneForm(stringLayoutJavaScriptID, stringInputKey);
			stringInputRequired = $(this).attr("required");
			stringLegendTitle = $(this).siblings("legend").text();
			stringLabelMessage = $("label[for='"+this.id+"']").text();

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		if (JSONTemporary.length > 0)
		{
			return JSONTransfer(JSONTemporary, JSONInput);
		}
		else
		{

		}
	}
	else
	{

	}
}

/* PDF */

function getSpecificPagePDF(stringLayoutJavaScriptID, JSONInput)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var JSONTemporary = [];
	var stringInputKey;
	var stringInputValue;
	var stringInputRequired;
	var booleanStateValidation = true;
	var stringErrorTitle;
	var stringErrorMessage;
	var stringLegendTitle;
	var stringLabelMessage;

	if (booleanStateValidation == true)
	{
		$(stringLayoutJQueryID + " input[type='text']").each(function()
		{
			stringInputKey = $(this).attr("id");
			stringInputValue = getSpecificTextForm(stringLayoutJavaScriptID, stringInputKey);
			stringInputRequired = $(this).attr("required");

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputValue) == false)
				{
					stringErrorTitle = $(this).attr(stringDataErrorTitle);
					stringErrorMessage = $(this).attr(stringDataErrorMessage);

					if (stringErrorTitle == null | stringErrorTitle == undefined | stringErrorTitle == "")
					{
						stringErrorTitle = stringLegendTitle;
					}
					else
					{
						
					}

					if (stringErrorMessage == null | stringErrorMessage == undefined | stringErrorMessage == "")
					{
						stringErrorMessage = stringLabelMessage;
					}
					else
					{
						
					}

					messageError(stringErrorTitle, stringErrorMessage);
					booleanStateValidation = false;
					return false;
				}
				else
				{
					JSONValidatePush(JSONTemporary, stringInputKey, stringInputValue);
				}
			}
			else
			{
				JSONEmptyPush(JSONTemporary, stringInputKey, stringInputValue);
			}
		});
	}
	else
	{

	}

	if (booleanStateValidation == true)
	{
		if (JSONTemporary.length > 0)
		{
			return JSONTransfer(JSONTemporary, JSONInput);
		}
		else
		{

		}
	}
	else
	{

	}
}


// GET EXTRA

function getInfix(stringInputJavaScriptID)
{
	if (stringInputJavaScriptID.substring(0, stringInfixProspectiveInsured.length) == stringInfixProspectiveInsured)
	{
		return stringInfixProspectiveInsured;
	}
	else if (stringInputJavaScriptID.substring(0, stringInfixPolicyHolder.length) == stringInfixPolicyHolder)
	{
		return stringInfixPolicyHolder;
	}
	else if (stringInputJavaScriptID.substring(0, stringInfixBeneficiariesList.length) == stringInfixBeneficiariesList)
	{
		return stringInfixBeneficiariesList;
	}
	else
	{

	}
}

function getPrefix(stringInputJavaScriptID)
{
	if (stringInputJavaScriptID.substring(0, stringPrefixText.length) == stringPrefixText)
	{
		return stringPrefixText;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixRadioButton.length) == stringPrefixRadioButton)
	{
		return stringPrefixRadioButton;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixCheckbox.length) == stringPrefixCheckbox)
	{
		return stringPrefixCheckbox;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixSelect.length) == stringPrefixSelect)
	{
		return stringPrefixSelect;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixDate.length) == stringPrefixDate)
	{
		return stringPrefixDate;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixArea.length) == stringPrefixArea)
	{
		return stringPrefixArea;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixNumber.length) == stringPrefixNumber)
	{
		return stringPrefixNumber;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixEmail.length) == stringPrefixEmail)
	{
		return stringPrefixEmail;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixTelephone.length) == stringPrefixTelephone)
	{
		return stringPrefixTelephone;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixTable.length) == stringPrefixTable)
	{
		return stringPrefixTable;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixRow.length) == stringPrefixRow)
	{
		return stringPrefixRow;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixColumn.length) == stringPrefixColumn)
	{
		return stringPrefixColumn;
	}
	else
	{
		
	}
}

function getLastID(JSONInput, stringKeyFilter)
{
	var stringJSONInputFilter;
	var stringJSONInputKey;
	var intTemporaryID = 0;
	var intKeyID;
	
	for (var i = 0; i < JSONInput.length; i++)
	{
		stringJSONInputKey = JSONInput[i].key;
		stringJSONInputFilter = stringJSONInputKey.substring(0, stringKeyFilter.length);
		
		if (stringKeyFilter == stringJSONInputFilter)
		{
			intKeyID = stringJSONInputKey.substring(stringKeyFilter.length, stringJSONInputKey.length);
			
			if (intTemporaryID < intKeyID)
			{
				intTemporaryID = intKeyID;
			}
			else
			{
				
			}
		}
		else
		{
			
		}
	}
	
	return intTemporaryID;
}


// SET EXTRA

function setSignatureImage(arrayImageSource)
{
	$(".SignatureImage").each(function(index)
	{
		if (arrayImageSource[index] == undefined || arrayImageSource[index] == "" || arrayImageSource[index] == null)
		{

		}
		else
		{
			$(this).attr("src", arrayImageSource[index]);			
		}
	});
}


// RELEASE

function releasePrefix(stringInputJavaScriptID)
{
	if (stringInputJavaScriptID.substring(0, stringPrefixText.length) == stringPrefixText)
	{
		return stringInputJavaScriptID.substring(stringPrefixText.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixRadioButton.length) == stringPrefixRadioButton)
	{
		return stringInputJavaScriptID.substring(stringPrefixRadioButton.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixSelect.length) == stringPrefixSelect)
	{
		return stringInputJavaScriptID.substring(stringPrefixSelect.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixDate.length) == stringPrefixDate)
	{
		return stringInputJavaScriptID.substring(stringPrefixDate.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixArea.length) == stringPrefixArea)
	{
		return stringInputJavaScriptID.substring(stringPrefixArea.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixCheckbox.length) == stringPrefixCheckbox)
	{
		return stringInputJavaScriptID.substring(stringPrefixCheckbox.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixNumber.length) == stringPrefixNumber)
	{
		return stringInputJavaScriptID.substring(stringPrefixNumber.length,stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixEmail.length) == stringPrefixEmail)
	{
		return stringInputJavaScriptID.substring(stringPrefixEmail.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixTelephone.length) == stringPrefixTelephone)
	{
		return stringInputJavaScriptID.substring(stringPrefixTelephone.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixTable.length) == stringPrefixTable)
	{
		return stringInputJavaScriptID.substring(stringPrefixTable.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixRow.length) == stringPrefixRow)
	{
		return stringInputJavaScriptID.substring(stringPrefixRow.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixColumn.length) == stringPrefixColumn)
	{
		return stringInputJavaScriptID.substring(stringPrefixColumn.length, stringInputJavaScriptID.length);
	}
	else
	{
		
	}
}

function releaseInfix(stringInputJavaScriptID)
{
	if (stringInputJavaScriptID.substring(0, stringInfixPolicyHolder.length) == stringInfixPolicyHolder)
	{
		return stringInputJavaScriptID.substring(stringInfixPolicyHolder.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringInfixProspectiveInsured.length) == stringInfixProspectiveInsured)
	{
		return stringInputJavaScriptID.substring(stringInfixProspectiveInsured.length, stringInputJavaScriptID.length);
	}
	else if (stringInputJavaScriptID.substring(0, stringInfixBeneficiariesList.length) == stringInfixBeneficiariesList)
	{
		return stringInputJavaScriptID.substring(stringInfixBeneficiariesList.length, stringInputJavaScriptID.length);
	}
	else
	{
		
	}
}


// INDICATOR

function indicatorPrefix(stringInputJavaScriptID)
{
	if (stringInputJavaScriptID.substring(0, stringPrefixText.length) == stringPrefixText)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixRadioButton.length) == stringPrefixRadioButton)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixCheckbox.length) == stringPrefixCheckbox)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixSelect.length) == stringPrefixSelect)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixDate.length) == stringPrefixDate)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixArea.length) == stringPrefixArea)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixNumber.length) == stringPrefixNumber)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixEmail.length) == stringPrefixEmail)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixTelephone.length) == stringPrefixTelephone)
	{
		return stringStateInput;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixTable.length) == stringPrefixTable)
	{
		return stringStateTable;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixRow.length) == stringPrefixRow)
	{
		return stringStateTable;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixColumn.length) == stringPrefixColumn)
	{
		return stringStateTable;
	}
	else
	{
		
	}
}


// LISTENER

function inputListener()
{
	$("input").change(function()
	{
		booleanInputChangeState = "true";
	});
	
	$("textarea").change(function()
	{
		booleanInputChangeState = "true";
	});
	
	$("select").change(function()
	{
		booleanInputChangeState = "true";
	});
}


// COMPATIBILITY

function imageSelector(stringPath)
{
	$("img").each(function()
	{
		var stringSource = $(this).attr("src");

		if (stringSource == undefined || stringSource == "" || stringSource == null)
		{

		}
		else
		{
			$(this).attr("src", $(this).attr("src").replace("..\/..\/Resource\/", stringPath));			
		}
	});
}


// PREVIEW

function previewJSONInput(JSONInput)
{
	var stringJSONPreview = "";

	for (var i = 0; i < JSONInput.length; i++)
	{
		stringJSONPreview += "key : " + JSONInput[i].key + "\nvalue : " + JSONInput[i].value + "\n";
	}

	alert(stringJSONPreview);
}


// MESSAGE

function messageError(stringMessageTitle, stringMessageContent)
{
	var stringWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);

	if (stringWebView)
	{
		var callInfo = {};
		callInfo.data = {};
		callInfo.data.title = stringMessageTitle;
		callInfo.data.body = stringMessageContent;
		
		calliOSFunction('showAlert:', onSuccess, onError, callInfo);
	}
	else
	{
		if (stringMessageTitle == null | stringMessageTitle == undefined | stringMessageTitle == "")
		{
			alert(stringMessageContent);
		}
		else
		{
			alert(stringMessageTitle + "\n" + stringMessageContent);
		}
	}
}