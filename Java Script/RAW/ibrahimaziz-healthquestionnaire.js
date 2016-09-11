// GENERATOR

function footerSetterForHealthQuestionnairePDF(stringDetail, intTotalPage)
{
	$("footer .Detail").each(function(indexPage)
	{
		$(this).text(stringDetail + " Hal " + (indexPage + 1) + " / " + intTotalPage);
	})
}

function titleSetterForHealthQuestionnairePDF(stringTitle)
{
	$("h1").text(stringTitle);
	$("span.QuestionnaireTitle").text(stringTitle);
}


// MULTI POP UP

function showPopUpFromButton(stringPopUpLinkJavaScriptID, stringParentNameWithoutPrefix, arrayContent)
{
	var stringPopUpLinkJQueryID = stringKres + stringPopUpLinkJavaScriptID;
	$(stringPopUpLinkJQueryID).css("display", "block");
	setInputFrom(stringPopUpLinkJavaScriptID, arrayContent, stringParentNameWithoutPrefix);
}

function showPopUpFromRadioButton(stringRadioButtonName, stringRadioButtonValue, stringPopUpLinkJavaScriptID, stringInfix, arrayContent, arrayInfix)
{
	var stringPopUpLinkJQueryID = stringKres + stringPopUpLinkJavaScriptID;
	var stringParentNameWithoutPrefix = stringInfix + arrayInfix[0];
	
	if (getRadioButtonGeneral(stringRadioButtonName) == stringRadioButtonValue)
	{
		setRadioButtonGeneral(stringRadioButtonName, null);
		$(stringPopUpLinkJQueryID).css("display", "block");
		setInputFrom(stringPopUpLinkJavaScriptID, arrayContent, stringParentNameWithoutPrefix);
	}
	else
	{
		var stringInfixForDelete;
		var stringKeyWithoutPrefix;
		var stringKeyInfix;
		var arrayDeleteTemporary = [];
		
		for (var i = 0; i < arrayInfix.length; i++)
		{
			stringInfixForDelete = stringInfix + arrayInfix[i];
			
			for (var j = 0; j < arrayContent.length; j++)
			{
				stringKeyWithoutPrefix = releasePrefix(arrayContent[j].elementID);
				stringKeyInfix = stringKeyWithoutPrefix.substring(0, stringInfixForDelete.length);
				
				if (stringInfixForDelete == stringKeyInfix)
				{
					arrayAdd(arrayDeleteTemporary, arrayContent[j].elementID, arrayContent[j].Value);
				}
				else
				{
					
				}
			}
		}
		
		for (var k = 0; k < arrayDeleteTemporary.length; k++)
		{
			for (var l = 0; l < arrayContent.length; l ++)
			{
				if (arrayDeleteTemporary[k].elementID == arrayContent[l].elementID)
				{
					arrayContent.splice(l, 1);
				}
				else
				{
					
				}
			}
		}
		
		arrayAdd(arrayContent, stringRadioButtonName, getRadioButtonGeneral(stringRadioButtonName));
	}
	
	previewArrayObject(arrayContent);
}

function buttonPopUpNavigation(stringButtonJavaScriptID, stringPopUpCurrentJavaScriptID, stringPopUpLinkJavaScriptID, stringParentNameWithoutPrefix, arrayContent)
{	
	var stringButtonJQueryID = stringKres + stringButtonJavaScriptID;	
	var stringPopUpCurrentJQueryID = stringKres + stringPopUpCurrentJavaScriptID;	
	var stringPopUpLinkJQueryID = stringKres + stringPopUpLinkJavaScriptID;	
	setInputFrom(stringPopUpLinkJavaScriptID, arrayContent, stringParentNameWithoutPrefix);
	
	$(stringPopUpCurrentJQueryID).css("display", "none");	
	$(stringPopUpLinkJQueryID).css("display", "block");
}

function buttonPopUpDone(stringPopUpCurrentJavaScriptID, stringParentNameWithoutPrefix, arrayContent, arrayValidation)
{
	var stringPopUpCurrentJQueryID = stringKres + stringPopUpCurrentJavaScriptID;
	var booleanState = false;
	
	if (arrayValidation.length == 0 || arrayValidation == null)
	{
		booleanState = true;
	}
	else
	{
		var stringRequiredValue;
		
		for (var i = 0; i < arrayValidation.length; i++)
		{
			stringRequiredValue = arrayFind(arrayHealthQuestionnaire, arrayValidation[i]);
			
			if (stringRequiredValue != null)
			{
				booleanState = true;
			}
			else
			{

			}
		}
	}
	
	if (booleanState == true)
	{
		var stringButtonPreviewJavaScriptID = stringButtonPreviewPrefix + stringParentNameWithoutPrefix;
		var stringButtonPreviewJQueryID = stringKres + stringButtonPreviewJavaScriptID;
		var stringRadioButtonName = stringPrefixRadioButton + stringParentNameWithoutPrefix;
		
		getInputFrom(stringPopUpCurrentJavaScriptID, arrayContent, stringParentNameWithoutPrefix);
		$(stringPopUpCurrentJQueryID).css("display", "none");
		$(stringButtonPreviewJQueryID).css("display", "block");
		previewArrayObject(arrayContent);
		arrayAdd(arrayContent, stringRadioButtonName, getRadioButtonGeneral(stringRadioButtonName));
	}
	else
	{
		alert("Harap mengisi kuesioner tambahan minimal satu !.");
	}
}

function buttonPopUpCancel(stringPopUpCurrentJavaScriptID)
{
	var stringPopUpCurrentJQueryID = stringKres + stringPopUpCurrentJavaScriptID;
	
	$(stringPopUpCurrentJQueryID).css("display", "none");
}

function buttonSubPopUpDone(stringPopUpCurrentJavaScriptID, stringPopUpParentJavaScriptID, stringParentNameWithoutPrefix, arrayContent)
{
	var stringPopUpCurrentJQueryID = stringKres + stringPopUpCurrentJavaScriptID;
	var stringPopUpParentJQueryID = stringKres + stringPopUpParentJavaScriptID;
	var booleanState = getInputFrom(stringPopUpCurrentJavaScriptID, arrayContent, stringParentNameWithoutPrefix);
	
	if (booleanState == true)
	{
		$(stringPopUpCurrentJQueryID).css("display", "none");
		$(stringPopUpParentJQueryID).css("display", "block");
		previewArrayObject(arrayContent);
	}
	else
	{
		
	}
}

function buttonSubPopUpCancel(stringPopUpCurrentJavaScriptID, stringPopUpParentJavaScriptID)
{
	var stringPopUpCurrentJQueryID = stringKres + stringPopUpCurrentJavaScriptID;
	var stringPopUpParentJQueryID = stringKres + stringPopUpParentJavaScriptID;
	
	$(stringPopUpCurrentJQueryID).css("display", "none");
	$(stringPopUpParentJQueryID).css("display", "block");
}


// POP UP SETTER

function textPopUpSetter(stringPopUpJavaScriptID, stringParentNameWithoutPrefix, arrayContent)
{
	var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
	
	$(stringPopUpJQueryID + " input:text").each(function()
    {
        var stringInputJavaScriptID = $(this).attr("id");
		var stringInputJQueryID = stringKres + stringInputJavaScriptID;
		$(stringInputJQueryID).val("");
		
        var stringInputNameWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixText.length, stringInputJavaScriptID.length);
        var stringKey = stringPrefixText + stringParentNameWithoutPrefix + stringInputNameWithoutPrefix;
        var stringValue = arrayFind(arrayContent, stringKey);
        
        if (stringValue == null || stringValue == undefined)
        {
            
        }
        else
        {
            setTextForm(stringInputJavaScriptID, stringValue);
        }
    });
}

function textPopUpGetter(stringPopUpJavaScriptID, stringParentNameWithoutPrefix, arrayContent)
{
	var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
	
	$(stringPopUpJQueryID + " form input[type=text]").each(function()
	{
		var stringInputJavaScriptID = $(this).attr("id");
		var stringInputJQueryID = stringKres + stringInputJavaScriptID;
		$(stringInputJQueryID).val("");
		
		var stringInputNameWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixText.length, stringInputJavaScriptID.length);
        var stringKey = stringPrefixText + stringParentNameWithoutPrefix + stringInputNameWithoutPrefix;
        var stringValue = arrayFind(arrayContent, stringKey);
		
		if (validateTextGeneral(stringInputJQueryID) == true)
		{
			arrayAdd(arrayContent, stringKey, stringValue);
		}
		else
		{
			validationMessage("Harap lengkapi form terlebih dahulu !.", null);
		}
	});
}


// FOR POP UP

function getInputFrom(stringLayoutJavaScriptID, arrayContent, stringInputInfix)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var arrayInputTemporary = [];
	stateValidation = true;
	
	// TEXT
	
	if (stateValidation == true)
	{
		$(stringLayoutJQueryID + " form input[type='text']").each(function()
		{
			var stringInputJavaScriptID =$(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputIDWithoutPrefix = releasePrefix($(this).attr("id"));
			var stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			var stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			var stringKey = getPrefix(stringInputJavaScriptID) + stringInputInfix + stringInputIDWithoutPrefix;
			var stringValue = getTextForm(stringSpecificInputJavaScriptID);
			
			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringSpecificInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// RADIO BUTTON
	
	if (stateValidation == true)
	{
		var stringRadioButtonFlag = 0;
		
		$(stringLayoutJQueryID + " form input[type='radio']").each(function()
		{
			var stringInputName = $(this).attr("name");
			var stringInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix($(this).attr("name"));
			var stringKey = stringPrefixRadioButton + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getSpecificRadioButtonGeneral(stringLayoutJQueryID, stringInputName);

			if (stringRadioButtonFlag != stringInputName)
			{
				if (stringInputRequired == stringStateRequired)
				{
					if (validateSpecificRadioButtonGeneral(stringLayoutJQueryID, stringInputName) == false)
					{
						validationMessage("Harap lengkapi form terlebih dahulu !.", null);
						return false;
					}
					else
					{
						arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
						stringRadioButtonFlag = stringInputName;
					}
				}
				else
				{
					arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
					stringRadioButtonFlag = stringInputName;
				}
			}
			else
			{
				
			}
		});
	}
	else
	{
		
	}
	
	// SELECT
	
	if (stateValidation == true)
	{
		$(stringLayoutJQueryID + " form select").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputIDWithoutPrefix = releasePrefix($(this).attr("id"));
			var stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			var stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			var stringKey = stringPrefixSelect + stringInputInfix + stringInputIDWithoutPrefix;
			var stringValue = getSelectForm(stringSpecificInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateSelectGeneral(stringSpecificInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// DATE
	
	if (stateValidation == true)
	{
		$(stringLayoutJQueryID + " form input[type='date']").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputIDWithoutPrefix = releasePrefix($(this).attr("id"));
			var stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			var stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			var stringKey = stringPrefixDate + stringInputInfix + stringInputIDWithoutPrefix;
			var stringValue = getDateForm(stringSpecificInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringSpecificInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				// alert(stringKey + " " + stringValue);
				arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// EMAIL
	
	if (stateValidation == true)
	{
		$(stringLayoutJQueryID + " form input[type='email']").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputIDWithoutPrefix = releasePrefix($(this).attr("id"));
			var stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			var stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			var stringKey = stringPrefixEmail + stringInputInfix + stringInputIDWithoutPrefix;
			var stringValue = getEmailForm(stringSpecificInputJavaScriptID);

			if (stringInputRequired == true)
			{
				if (validateTextGeneral(stringSpecificInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// NUMBER
	
	if (stateValidation == true)
	{
		$(stringLayoutJQueryID + " form input[type='number']").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputIDWithoutPrefix = releasePrefix($(this).attr("id"));
			var stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			var stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			var stringKey = stringPrefixText + stringInputInfix + stringInputIDWithoutPrefix;
			var stringValue = getNumberForm(stringSpecificInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringSpecificInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// CHECKBOX
	
	if (stateValidation == true)
	{
		$(stringLayoutJQueryID + " form input:checkbox").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputIDWithoutPrefix = releasePrefix($(this).attr("id"));
			var stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			var stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			var stringKey = stringPrefixText + stringInputInfix + stringInputIDWithoutPrefix;
			var stringValue = getCheckboxGeneral(stringSpecificInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringSpecificInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// TEXT AREA
	
	if (stateValidation == true)
	{
		$(stringLayoutJQueryID + " form textarea").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputIDWithoutPrefix = releasePrefix($(this).attr("id"));
			var stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			var stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			var stringKey = stringPrefixArea + stringInputInfix + stringInputIDWithoutPrefix;
			var stringValue = getAreaForm(stringSpecificInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringSpecificInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayValidatePush(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	if (stateValidation == true)
	{
		arrayTransfer(arrayInputTemporary, arrayContent);
		return true;
	}
	else
	{
		return false;
	}
}

function setInputFrom(stringLayoutJavaScriptID, arrayContent, stringInputInfix)
{	
	var stringKey;
	var stringValue;
	var stringKeyPrefix;
	var stringKeyWithoutPrefix;
	var stringKeyWithoutInfix;
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	
	for (var i = 0; i < arrayContent.length; i++)
	{
		stringKey = arrayContent[i].elementID;
		stringValue = arrayContent[i].Value;
		stringKeyPrefix = getPrefix(stringKey);
		stringKeyWithoutPrefix = releasePrefix(stringKey);
		stringKeyWithoutInfix = stringKeyWithoutPrefix.substring(stringInputInfix.length, stringKeyWithoutPrefix.length);
		
		if (stringKeyPrefix == stringPrefixText)
		{			
			setTextForm(stringLayoutJavaScriptID + " " + stringKres + stringPrefixText + stringKeyWithoutInfix, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixRadioButton)
		{			
			setSpecificRadioButtonGeneral(stringLayoutJavaScriptID, stringPrefixRadioButton + stringKeyWithoutInfix, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixCheckbox)
		{			
			setCheckboxGeneral(stringLayoutJavaScriptID + " " + stringKres + stringPrefixCheckbox + stringKeyWithoutInfix, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixSelect)
		{			
			setSelectForm(stringLayoutJavaScriptID + " " + stringKres + stringPrefixSelect + stringKeyWithoutInfix, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixArea)
		{			
			setAreaForm(stringLayoutJavaScriptID + " " + stringKres + stringPrefixArea + stringKeyWithoutInfix, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixNumber)
		{			
			setNumberForm(stringLayoutJavaScriptID + " " + stringKres + stringPrefixNumber + stringKeyWithoutInfix, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixEmail)
		{			
			setEmailForm(stringLayoutJavaScriptID + " " + stringKres + stringPrefixEmail + stringKeyWithoutInfix, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixDate)
		{			
			setDateForm(stringLayoutJavaScriptID + " " + stringKres + stringPrefixDate + stringKeyWithoutInfix, stringValue);
		}
		else
		{
			
		}
	}
}

function getPrefix(stringKey)
{
	if (stringKey.substring(0, stringPrefixText.length) == stringPrefixText)
	{
		return stringPrefixText;
	}
	else if (stringKey.substring(0, stringPrefixRadioButton.length) == stringPrefixRadioButton)
	{
		return stringPrefixRadioButton;
	}
	else if (stringKey.substring(0, stringPrefixCheckbox.length) == stringPrefixCheckbox)
	{
		return stringPrefixCheckbox;
	}
	else if (stringKey.substring(0, stringPrefixSelect.length) == stringPrefixSelect)
	{
		return stringPrefixSelect;
	}
	else if (stringKey.substring(0, stringPrefixDate.length) == stringPrefixDate)
	{
		return stringPrefixDate;
	}
	else if (stringKey.substring(0, stringPrefixArea.length) == stringPrefixArea)
	{
		return stringPrefixArea;
	}
	else if (stringKey.substring(0, stringPrefixNumber.length) == stringPrefixNumber)
	{
		return stringPrefixNumber;
	}
	else if (stringKey.substring(0, stringPrefixEmail.length) == stringPrefixEmail)
	{
		return stringPrefixEmail;
	}
	else
	{
		
	}
}



function setToHealthQuestionnairePDF(stringLayoutJavaScriptID, arrayContent)
{
	var stringKey;
	var stringValue;
	var stringKeyPrefix;
	var stringKeyWithoutPrefix;
	var stringKeyWithoutInfix;
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var stringInputJavaScriptID;
	var stringInputJQueryID;
	var stringSpecificInputJavaScriptID;
	var stringSpecificInputJQueryID;
	
	for (var i = 0; i < arrayContent.length; i++)
	{
		stringKey = arrayContent[i].elementID;
		stringValue = arrayContent[i].Value;
		stringKeyPrefix = getPrefix(stringKey);

		if (stringKeyPrefix == stringPrefixText)
		{
			stringInputJQueryID = stringKres + stringKey;
			stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			
			if (stringSpecificInputJQueryID.is("table") == true)
			{
				setBoxGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
			else
			{
				setTextGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
		}
		else if (stringKeyPrefix == stringPrefixRadioButton)
		{
			setRadioButtonGeneral(stringLayoutJavaScriptID + " " + stringKres + stringKey, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixCheckbox)
		{
			setCheckboxGeneral(stringLayoutJavaScriptID + " " + stringKres + stringKey, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixSelect)
		{
			stringInputJQueryID = stringKres + stringKey;
			stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			
			if (stringSpecificInputJQueryID.is("table") == true)
			{
				setBoxGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
			else
			{
				setTextGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
		}
		else if (stringKeyPrefix == stringPrefixArea)
		{
			stringInputJQueryID = stringKres + stringKey;
			stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			
			if (stringSpecificInputJQueryID.is("table") == true)
			{
				setBoxGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
			else
			{
				setTextGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
		}
		else if (stringKeyPrefix == stringPrefixNumber)
		{
			stringInputJQueryID = stringKres + stringKey;
			stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			
			if (stringSpecificInputJQueryID.is("table") == true)
			{
				setBoxGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
			else
			{
				setTextGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
			
			setNumberForm(stringLayoutJavaScriptID + " " + stringKres + stringPrefixNumber + stringKeyWithoutInfix, stringValue);
		}
		else if (stringKeyPrefix == stringPrefixEmail)
		{
			stringInputJQueryID = stringKres + stringKey;
			stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			
			if (stringSpecificInputJQueryID.is("table") == true)
			{
				setBoxGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
			else
			{
				setTextGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
		}
		else if (stringKeyPrefix == stringPrefixDate)
		{
			stringInputJQueryID = stringKres + stringKey;
			stringSpecificInputJavaScriptID = stringLayoutJavaScriptID + " " + stringInputJQueryID;
			stringSpecificInputJQueryID = stringKres + stringSpecificInputJavaScriptID;
			
			if (stringSpecificInputJQueryID.is("table") == true)
			{
				setBoxGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
			else
			{
				setTextGeneral(stringSpecificInputJavaScriptID, stringValue);
			}
		}
		else
		{
			
		}
	}
}


// SETTER FOR AMANDEMENT

function getFromDatabaseForAmandement(arrayContent, stringPageInfix, stringLayoutJavaScriptID)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var arrayPrefixFilter = [stringPrefixText, stringPrefixArea];
	var stringInfixFilter;
	var stringSuffixFilter = "Detail";
	var arrayGeneralForm = ["Respiratory", "Cardiac", "Digest", "Nerve", "Liver", "Motion", "Gland", "Claim", "Diagnostic", "PregnancyIllness", "FemaleAbnormality", "PapSmear", "HeartDissorder"];
	var arrayGeneralFormInIndonesia = ["Pernapasan", "Jantung", "Pencernaan", "Saraf", "Hati", "Gerak", "Kelenjar", "Klaim SPAJ", "Pemeriksaan", "Sakit Kehamilan", "Kelainan Wanita", "Pap Smear", "Kelainan Jantung"];
	var stringKey;
	var stringQuestionPrefix = "Jawaban tambahan kuesioner ";
	var intQuestionNumber = 0;
	
	for (var i = 0; i < arrayGeneralForm.length; i++)
	{
		stringInfixFilter = stringPageInfix + arrayGeneralForm[i];
		
		
		for (var j = 0; j < arrayContent.length; j++)
		{
			for (var k = 0; k < arrayPrefixFilter.length; k++)
			{
				stringKey = arrayPrefixFilter[k] + stringInfixFilter + stringSuffixFilter;
				
				if (stringKey == arrayContent[j].elementID)
				{
					intQuestionNumber++;

					$(stringLayoutJQueryID).append
					(
						"<span class='Number Single PositionerLeft'>" + intQuestionNumber + ". " + "</span>" + 
						"<label for='" + arrayContent[j].elementID + "' class='Single PositionerLeft' >" + stringQuestionPrefix + arrayGeneralFormInIndonesia[i] + "</label>" + 
						"<br>" + 
						"<textarea id='" + arrayContent[j].elementID + "' class='Full Double PositionerLeft'>" + arrayContent[j].Value + "</textarea>" + 
						"</br>"
					);
				}
				else
				{

				}
			}
		}
	}
}


// GET FROM DATABASE

function getFromDatabaseForHealthQuestionnaire(objectContent, stringPageType)
{    
    for (var i = 0; i < objectContent.length; i++)
    {        
        var stringKey = objectContent[i].elementID;
        var stringValue = objectContent[i].Value;               
        
		
		// GENERAL INPUT TYPE
		
        if (stringKey.substring(0, stringPrefixText.length) == stringPrefixText)
        {
			if (stringPageType == stringPageTypePDF)
			{
				setTextPDF(stringKey, stringValue);        
			}
			else
			{
				setTextForm(stringKey, stringValue);
			}
        }
        else if (stringKey.substring(0, stringPrefixRadioButton.length) == stringPrefixRadioButton)
        {
            setRadioButtonGeneral(stringKey, stringValue);
        }
        else if (stringKey.substring(0, stringPrefixCheckbox.length) == stringPrefixCheckbox)
        {            
            setCheckboxGeneral(stringKey, stringValue);
        }
        else if (stringKey.substring(0, stringPrefixSelect.length) == stringPrefixSelect)
        {            
            if (stringPageType == stringPageTypePDF)
            {
                setSelectPDF(stringKey, stringValue);
            }
            else
            {
                setSelectForm(stringKey, stringValue);
            }
        }
        else if (stringKey.substring(0, stringPrefixDate.length) == stringPrefixDate)
        {            
            if (stringPageType == stringPageTypePDF)
            {
                setDatePDF(stringKey, stringValue);
            }
            else
            {
                setDateForm(stringKey, stringValue);
            }
        }
        else if (stringKey.substring(0, stringAreaPrefix.length) == stringAreaPrefix)
        {            
            if (stringPageType == stringPageTypePDF)
            {
                setAreaPDF(stringKey, stringValue);
            }
            else
            {
                setAreaForm(stringKey, stringValue);
            }
        }
        else
        {
            
        }				
    }
}