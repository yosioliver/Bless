// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.biz
// built for InfoConnect Sdn Bhd - BCA Life Bless
// http://www.infoconnect.com.my


// INITIALIZATION

var directoryRoot = "..";
var boxTypeWithBottomLabel = "With bottom label";
var boxTypeWithoutLabel = "Without label";
var labelDay = "Tanggal";
var labelMonth = "Bulan";
var labelYear = "Tahun";
var labelDate = "Tanggal";
var sizeBox = 20;
var arrayHealthQuestionnaire = [];
var stringRadioButtonName;
var stringDetailSuffix = "Detail";
var stringCheckboxSuffix = "Checkbox";
var stringButtonPreviewPrefix = "ButtonPreview";
var boxTypeStraight = "Text";
var boxTypeDate = "Date";
var boxTypeTelephone = "Telephone";
var stringIDDay = "Day";
var stringIDMonth = "Month";
var stringIDYear = "Year";
var stringIDPrefix = "Prefix";
var stringIDInfix = "Infix";
var stringIDSuffix = "Suffix";
var stringIDLine = "Line";
var stringHealthSuffix = "Health";
var stringKres = "#";
var stringSeparatorDate = "/";
var stringSeparatorTelephone = "-";
var stateValidation = true;
var stringPageTypePDF = "PDF";
var stringPageTypeForm = "Form";
var stringPrefixText = "Text";
var stringPrefixRadioButton = "RadioButton";
var stringPrefixCheckbox = "Checkbox";
var stringPrefixDate = "Date";
var stringPrefixLabel = "Label";
var stringPrefixSelect = "Select";
var stringPopUpTypeGeneral = "general";
var stringPopUpTypeHealth = "health";
var stringPopUpTypeSPAJProposal = "spajproposal";
var stringInputTypeAutoPopulate = "autopopulate";
var stringTablePrefix = "Table";
var stringBodyPrefix = "Body";
var stringRowPrefix = "Row";
var stringCellPrefix = "Cell";
var stringNumberPrefix = "Number";
var arrayHealthTableHeader = ["DiseaseName", "SickFrom", "SickDuration", "DoctorName", "Hospital", "Address", "Telephone"];
var arraySPAJProposalTableHeader = ["CompanyName", "PolicyNumber", "Published", "BasicSumAssured", "Decision"];
var stringAreaPrefix = "Area";
var stringProspectiveInsuredPrefix = "ProspectiveInsured";
var stringPolicyHolderPrefix = "PolicyHolder";
var arrayCountryList = [];
var stringButtonPrefix = "Button";
var stringHandphoneSuffix = "Handphone";
var boxTypeWithBottomNote = "With bottom note";
var arrayBeneficiariesList = [];
var intBeneficiariesListID = 1;
var stringBeneficiariesListInfix = "BeneficiariesList";
var stringPageSectionForm = "Form";
var stringPageSectionHealthQuestionnaire = "Health Questionnaire";
var stringPageSectionBeneficiariesList = "Beneficiaries List";
var stringButtonViewPrefix = "ButtonView";
var stringButtonDeletePrefix = "ButtonDelete";
var stringSharePercentage = 0;
var arrayBeneficiariesListTableHeader = ["FullName", stringIDDay, stringIDMonth, stringIDYear, "Sex", "Relationship", "Nationality"];
var intSharePercentage = 0;
var stringSharePercentageSuffix = "SharePercentage";
var stringSPAJProposalInfix = "SPAJProposal";
var intSPAJProposalID = 1;
var stringPopUpTypeHardCopy = "hardcopy";
var stringIndicatorPolicyHolder = "Pol";
var stringIndicatorProspectiveInsured = "Pro";
var stringPopUpTypeCardiac = "PopUpCardiac";
var stringPopUpTypeChestPain = "PopUpChestPain";
var stringPopUpTypeHipertensi = "PopUpHipertensi";
var stringPrefixEmail = "Email";
var stringPrefixNumber = "Number";
var stringStateRequired = "required";


// GENERATOR

function labelGenerator(labelID, labelAmount)
{
    $(labelID).css("width", (((sizeBox + 4) * labelAmount) - 10) - labelAmount + "px");
}

function spanGenerator(spanID, spanAmount)
{
    $(spanID).css("width", (((sizeBox + 4) * spanAmount) - 10) - spanAmount + "px");
}

function boxGenerator(tableID, boxAmount, boxType, boxLabel)
{
    $(tableID).append("<tbody></tbody>");
    $(tableID + " tbody").append("<tr></tr>");
    var stringTableID = tableID.substring(1, tableID.length);
    
    for (var i = 0; i < boxAmount; i++)
    {
        $(tableID + " tbody tr").append("<td id=" + stringTableID + i + "></td>");
    }
    
    if (boxType == boxTypeWithBottomLabel)
    {
        $(tableID).append("<tfoot><tr><td class='' colspan=" + boxAmount + ">" + boxLabel + "</td></tr></tfoot>");
    }
	else if (boxType == boxTypeWithBottomNote)
	{
		$(tableID).append("<tfoot><tr><td class='Note' colspan=" + boxAmount + ">" + boxLabel + "</td></tr></tfoot>");
	}
    else
    {

    }
}

function lineGenerator(lineID, lineAmount)
{
    $(lineID).css("width", ((sizeBox * lineAmount) + 2) + "px");
}

function headerGenerator(stringID)
{
	$(stringID).each(function(index)
	{
		var stringTableOriginalJavaScriptID = $(this).attr("id");
		var stringTableOriginalJQueryID = stringKres + stringTableOriginalJavaScriptID;
		var stringTableUpdatedJavaScriptID = $(this).attr("id") + index;
		var stringTableUpdatedJQueryID = stringKres + stringTableUpdatedJavaScriptID;

		$(this).attr("id", stringTableUpdatedJavaScriptID);

		boxGenerator(stringTableUpdatedJQueryID, 11, boxTypeWithoutLabel, null);
	});
}

function setHeader(stringValue)
{
	$(".HeaderGeneral table").each(function(index)
	{
		setBoxGeneral($(this).attr("id"), stringValue);
	});
}

function footerGenerator(stringDetail, intTotalPage)
{
	$(".SpanFooterDetail").each(function(indexPage)
	{
		$(this).text(stringDetail + " Hal " + (indexPage + 1) + " / " + intTotalPage);
	})
}

function tableHealthGenerator(stringTableID, intRow)
{
	var stringInfixName = stringTableID.substring(stringTablePrefix.length, stringTableID.length);
	var stringTableJQueryID = stringKres + stringTableID;
	var stringRowJavaScriptID;
	var stringRowJQueryID;
	var stringCellJavaScriptID;
	var stringCellJQueryID;
	var stringMonthJavaScriptID;
	var stringMonthJQueryID;
	var stringYearJavaScriptID;
	var stringYearJQueryID;
	var stringBodyJavaScriptID = stringBodyPrefix + stringInfixName;
	var stringBodyJQueryID = stringKres + stringBodyJavaScriptID;
	
	$(stringTableJQueryID).append("<tbody id='" + stringBodyJavaScriptID + "'></tbody>");
	
	for (var i = 0; i < intRow; i++)
	{
		stringRowJavaScriptID = stringRowPrefix + stringInfixName + i;
		stringRowJQueryID = stringKres + stringRowJavaScriptID;
		
		$(stringTableJQueryID + " " + stringBodyJQueryID).append("<tr id='" + stringRowJavaScriptID + "'></tr>");
		
		stringCellJavaScriptID = stringCellPrefix + stringInfixName + stringNumberPrefix + i;
		stringCellJQueryID = stringKres + stringCellJavaScriptID;

		$(stringRowJQueryID).append("<td id='" + stringCellJavaScriptID + "'></td>");
		
		for (var j = 0; j < arrayHealthTableHeader.length - 1; j++)
		{
			stringCellJavaScriptID = stringCellPrefix + stringInfixName + arrayHealthTableHeader[j] + i;
			stringCellJQueryID = stringKres + stringCellJavaScriptID;
			stringMonthJavaScriptID = stringPrefixDate + stringInfixName + arrayHealthTableHeader[j] + stringIDMonth + i;
			stringMonthJQueryID = stringKres + stringMonthJavaScriptID;
			stringYearJavaScriptID = stringPrefixDate + stringInfixName + arrayHealthTableHeader[j] + stringIDYear + i;
			stringYearJQueryID = stringKres + stringYearJavaScriptID;
			
			$(stringRowJQueryID).append("<td id='" + stringCellJavaScriptID + "'></td>");
			
			if (j == 1)
			{
				$(stringRowJQueryID + " " + stringCellJQueryID).append("<label for='" + stringMonthJavaScriptID + "' class='Wrap Single PositionerCenter'>Bulan</label>");
				$(stringRowJQueryID + " " + stringCellJQueryID).append("<table id='" + stringMonthJavaScriptID + "' class='BoxSquare PositionerCenter'></table><br>");
				$(stringRowJQueryID + " " + stringCellJQueryID).append("<label for='" + stringYearJavaScriptID + "' class='Wrap Single PositionerCenter'>Tahun</label>");
				$(stringRowJQueryID + " " + stringCellJQueryID).append("<table id='" + stringYearJavaScriptID + "' class='BoxSquare PositionerCenter'></table>");
				
                boxGenerator(stringMonthJQueryID, 2, boxTypeWithoutLabel, null);
                boxGenerator(stringYearJQueryID, 2, boxTypeWithoutLabel, null);
			}
			else
			{
				
			}
		}
	}
}

function tablePDFSPAJProposalGenerator(stringTableID, intRow)
{
	var stringInfixName = stringTableID.substring(stringTablePrefix.length, stringTableID.length);
	var stringTableJQueryID = stringKres + stringTableID;
	var stringRowJavaScriptID;
	var stringRowJQueryID;
	var stringCellJavaScriptID;
	var stringCellJQueryID;
	var stringBodyJavaScriptID = stringBodyPrefix + stringInfixName;
	var stringBodyJQueryID = stringKres + stringBodyJavaScriptID;
	
	$(stringTableJQueryID).append("<tbody id='" + stringBodyJavaScriptID + "'></tbody>");
	
	for (var i = 0; i < intRow; i++)
	{
		stringRowJavaScriptID = stringRowPrefix + stringInfixName + i;
		stringRowJQueryID = stringKres + stringRowJavaScriptID;
		
		$(stringTableJQueryID + " " + stringBodyJQueryID).append("<tr id='" + stringRowJavaScriptID + "'></tr>");
		
		stringCellJavaScriptID = stringCellPrefix + stringInfixName + stringNumberPrefix + i;
		stringCellJQueryID = stringKres + stringCellJavaScriptID;

		$(stringRowJQueryID).append("<td id='" + stringCellJavaScriptID + "'></td>");
		
		for (var j = 0; j < arraySPAJProposalTableHeader.length; j++)
		{
			stringCellJavaScriptID = stringCellPrefix + stringInfixName + arraySPAJProposalTableHeader[j] + i;
			stringCellJQueryID = stringKres + stringCellJavaScriptID;
			
			$(stringRowJQueryID).append("<td id='" + stringCellJavaScriptID + "'></td>");
		}
	}
}

function tablePDFBeneficiariesListGenerator(stringTableID, intRow)
{
	var stringInfixName = stringTableID.substring(stringTablePrefix.length, stringTableID.length);
	var stringTableJQueryID = stringKres + stringTableID;
	var stringRowJavaScriptID;
	var stringRowJQueryID;
	var stringCellJavaScriptID;
	var stringCellJQueryID;
	var stringBodyJavaScriptID = stringBodyPrefix + stringInfixName;
	var stringBodyJQueryID = stringKres + stringBodyJavaScriptID;
	
	$(stringTableJQueryID).append("<tbody id='" + stringBodyJavaScriptID + "'></tbody>");
	
	for (var i = 0; i < intRow; i++)
	{
		stringRowJavaScriptID = stringRowPrefix + stringInfixName + i;
		stringRowJQueryID = stringKres + stringRowJavaScriptID;
		
		$(stringTableJQueryID + " " + stringBodyJQueryID).append("<tr id='" + stringRowJavaScriptID + "'></tr>");
		
		stringCellJavaScriptID = stringCellPrefix + stringInfixName + stringNumberPrefix + i;
		stringCellJQueryID = stringKres + stringCellJavaScriptID;

		$(stringRowJQueryID).append("<td id='" + stringCellJavaScriptID + "'></td>");
		
		for (var j = 0; j < arrayBeneficiariesListTableHeader.length; j++)
		{
			stringCellJavaScriptID = stringCellPrefix + stringInfixName + arrayBeneficiariesListTableHeader[j] + i;
			stringCellJQueryID = stringKres + stringCellJavaScriptID;
			
			$(stringRowJQueryID).append("<td id='" + stringCellJavaScriptID + "'></td>");
		}
	}
}

function radioButtonHealthQuestionnaireDefault()
{
    $("input:radio[name^='RadioButton']").each(function()
    {
        setRadioButtonGeneral($(this).attr("name"), "false");
    });
}


// BUTTON GENERATOR

function buttonPreviewGenerator(stringRadioButtonName, booleanState)
{
    var stringButtonPreviewJQueryID = stringKres + stringButtonPreviewPrefix + stringRadioButtonName.substring(stringPrefixRadioButton.length, stringRadioButtonName.length);
    
    if (booleanState == true)
    {
        $(stringButtonPreviewJQueryID).css("display", "block");
    }
    else
    {
        $(stringButtonPreviewJQueryID).css("display", "none");
    }           
}

function buttonCancelGenerator(stringPopUpID, booleanState)
{
    var stringButtonCancelJQueryID = stringKres + stringPopUpID + " " + stringKres + "ButtonCancel";
    
    if (booleanState == true)
    {
        $(stringButtonCancelJQueryID).css("display", "block");
    }
    else
    {
        $(stringButtonCancelJQueryID).css("display", "none");
    }           
}





// POP UP SHOW

function popUpGeneralShow(stringTriggerName, booleanInputState)
{
    var stringPopUpJavaScriptID = "PopUpGeneral";
    var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
    var stringRadioButtonNameWithoutPrefix = stringTriggerName.substring(stringPrefixRadioButton.length, stringTriggerName.length);
    
    $(stringPopUpJQueryID).css("display", "block");
    
    $("#LabelDetail").text("");
    
    if ($("#LabelDetail").text().length > 0)
    {
        
    }
    else
    {
        $("#LabelDetail").append($(stringKres + stringPrefixLabel + stringRadioButtonNameWithoutPrefix).text());
    }

    textPopUpSetter(stringPopUpJavaScriptID, stringRadioButtonNameWithoutPrefix, arrayHealthQuestionnaire);
    
    buttonCancelGenerator(stringPopUpJavaScriptID, booleanInputState)
}

function popUpHealthShow(stringTriggerName, booleanInputState)
{
    var stringPopUpJavaScriptID = "PopUpHealth";
    var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
    var stringRadioButtonNameWithoutPrefix = stringTriggerName.substring(stringPrefixRadioButton.length, stringTriggerName.length);
    
    $(stringPopUpJQueryID).css("display", "block");
    
    textPopUpSetter(stringPopUpJavaScriptID, stringRadioButtonNameWithoutPrefix, arrayHealthQuestionnaire);
    
    buttonCancelGenerator(stringPopUpJavaScriptID, booleanInputState);
}

function releasePrefix(stringKey)
{
	if (stringKey.substring(0, stringPrefixText.length) == stringPrefixText)
	{
		return stringKey.substring(stringPrefixText.length, stringKey.length);
	}
	else if (stringKey.substring(0, stringPrefixRadioButton.length) == stringPrefixRadioButton)
	{
		return stringKey.substring(stringPrefixRadioButton.length, stringKey.length);
	}
	else if (stringKey.substring(0, stringPrefixSelect.length) == stringPrefixSelect)
	{
		return stringKey.substring(stringPrefixSelect.length, stringKey.length);
	}
	else if (stringKey.substring(0, stringPrefixDate.length) == stringPrefixDate)
	{
		return stringKey.substring(stringPrefixDate.length, stringKey.length);
	}
	else if (stringKey.substring(0, stringPrefixArea.length) == stringPrefixArea)
	{
		return stringKey.substring(stringPrefixArea.length, stringKey.length);
	}
	else if (stringKey.substring(0, stringPrefixCheckbox.length) == stringPrefixCheckbox)
	{
		return stringKey.substring(stringPrefixCheckbox.length, stringKey.length);
	}
	else if (stringKey.substring(0, stringPrefixNumber.length) == stringPrefixNumber)
	{
		return stringKey.substring(stringPrefixNumber.length, stringKey.length);
	}
	else if (stringKey.substring(0, stringPrefixEmail.length) == stringPrefixEmail)
	{
		return stringKey.substring(stringPrefixEmail.length, stringKey.length);
	}
	else
	{
		
	}
}

function setKeyPrefix(stringInputJavaScriptID, stringInputInfix)
{
	if (stringInputJavaScriptID.substring(0, stringPrefixText.length) == stringPrefixText)
	{
		return stringPrefixText + stringInputInfix;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixDate.length) == stringPrefixDate)
	{
		return stringPrefixDate + stringInputInfix;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixRadioButton.length) == stringPrefixRadioButton)
	{
		return stringPrefixRadioButton + stringInputInfix;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixCheckbox.length) == stringPrefixCheckbox)
	{
		return stringPrefixCheckbox + stringInputInfix;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixSelect.length) == stringPrefixSelect)
	{
		return stringPrefixSelect + stringInputInfix;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixArea.length) == stringPrefixArea)
	{
		return stringPrefixArea + stringInputInfix;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixNumber.length) == stringPrefixNumber)
	{
		return stringPrefixNumber + stringInputInfix;
	}
	else if (stringInputJavaScriptID.substring(0, stringPrefixEmail.length) == stringPrefixEmail)
	{
		return stringPrefixEmail + stringInputInfix;
	}
	else
	{
		
	}
}

function popUpSPAJProposalShow(stringTriggerKey, stringKeyID, stringPopUpJavaScriptID, arrayContent)
{
    var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
    var stringTriggerInfix = releasePrefix(stringTriggerKey);
    $(stringPopUpJQueryID).css("display", "block");
	
	// INPUT SETTER
	
	$(stringPopUpJQueryID + " input:text").each(function()
    {
        var stringInputJavaScriptID = $(this).attr("id");
		var stringInputJQueryID = stringKres + stringInputJavaScriptID;
		$(stringInputJQueryID).val("");
		var stringInputSuffix = releasePrefix(stringInputJavaScriptID);
        var stringKey = setKeyPrefix(stringInputJavaScriptID, stringTriggerInfix + stringInputSuffix + stringKeyID);
		
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

function popUpBeneficiariesListShow(stringKeyID)
{
    var stringPopUpJavaScriptID = "PopUpBeneficiariesList";
    var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
    
    $(stringPopUpJQueryID).css("display", "block");
    
	// INPUT SETTER
	
	$(stringPopUpJQueryID + " input:text").each(function()
    {
        var stringInputJavaScriptID = $(this).attr("id");
		var stringInputJQueryID = stringKres + stringInputJavaScriptID;
		$(stringInputJQueryID).val("");
		var stringInputIDWithoutPrefix;
        var stringKey;
		
		if (stringInputJavaScriptID.substring(0, stringPrefixDate.length) == stringPrefixDate)
		{
			stringInputIDWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixDate.length, stringInputJavaScriptID.length);
			stringKey = stringPrefixDate + stringBeneficiariesListInfix + stringInputIDWithoutPrefix + stringKeyID;
		}
		else
		{
			stringInputIDWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixText.length, stringInputJavaScriptID.length);
			stringKey = stringPrefixText + stringBeneficiariesListInfix + stringInputIDWithoutPrefix + stringKeyID;
		}
		
        var stringValue = arrayFind(arrayBeneficiariesList, stringKey);
		
        if (stringValue == null || stringValue == undefined)
        {
            
        }
        else
        {
            setTextForm(stringInputJavaScriptID, stringValue);
        }
    });
	
	$(stringPopUpJQueryID + " input:radio").each(function()
    {
        var stringInputJavaScriptID = $(this).attr("id");
		var stringInputJQueryID = stringKres + stringInputJavaScriptID;
		
        var stringInputIDWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixRadioButton.length, stringInputJavaScriptID.length);
        var stringKey = stringPrefixRadioButton + stringBeneficiariesListInfix + stringInputIDWithoutPrefix + stringKeyID;
        var stringValue = arrayFind(arrayBeneficiariesList, stringKey);
        
        if (stringValue == null || stringValue == undefined)
        {
            
        }
        else
        {
            setRadioButtonGeneral(stringInputJavaScriptID, stringValue);
        }
    });
	
	$(stringPopUpJQueryID + " select").each(function()
    {
        var stringInputJavaScriptID = $(this).attr("id");
		var stringInputJQueryID = stringKres + stringInputJavaScriptID;
		
        var stringInputIDWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixSelect.length, stringInputJavaScriptID.length);
        var stringKey = stringPrefixSelect + stringBeneficiariesListInfix + stringInputIDWithoutPrefix + stringKeyID;
        var stringValue = arrayFind(arrayBeneficiariesList, stringKey);

        if (stringValue == null || stringValue == undefined)
        {
            
        }
        else
        {
            setSelectForm(stringInputJavaScriptID, stringValue);
        }
    });
}


// POP UP GENERATOR

function beneficiariesListGenerator(stringButtonJavaScriptID)
{
	var stringButtonJQueryID = stringKres + stringButtonJavaScriptID;
	var stringButtonIDWithoutPrefix = stringButtonJavaScriptID.substring(stringButtonPrefix.length, stringButtonJavaScriptID.length);
	
	$(stringButtonJQueryID).click(function()
	{
		if (arrayBeneficiariesList.length >= 10 && parseInt(intSharePercentage, 10) >= 100)
		{
			ReplaceHTMLNameOnValidate("","Maksimal 10 penerima manfaat atau share percentage sudah mencapai 100 !.");
			//alert("Maksimal 10 penerima manfaat atau share percentage sudah mencapai 100 !.");
		}
		else
		{
			popUpBeneficiariesListShow(null);
		}
	})
}

function SPAJProposalGenerator(stringButtonJavaScriptID)
{
	var stringButtonJQueryID = stringKres + stringButtonJavaScriptID;
	var stringButtonIDWithoutPrefix = stringButtonJavaScriptID.substring(stringButtonPrefix.length, stringButtonJavaScriptID.length);
	
	$(stringButtonJQueryID).click(function()
	{
		popUpSPAJProposalShow("RadioButtonSPAJProposal", null, "PopUpSPAJProposal", arrayHealthQuestionnaire);
	})
}

function additionalQuestionGenerator()
{
    var stringDetailKey;
    var stirngInfixName;
	
    $("#ButtonAddSPAJProposal").css("display", "none");
	
    $("input:radio[name^='RadioButton']").each(function()
    {
        if ($(this).data("popup-type") == stringPopUpTypeGeneral)
        {
            $("input:radio[name='" + $(this).attr("name") + "']").change(function()
            {
				stringInfixName = $(this).attr("name").substring(stringPrefixRadioButton.length, $(this).attr("name").length);
				
                if ($(this).val() == "true")
                {
                    popUpGeneralShow($(this).attr("name"), true);
                }
                else
                {
                    $("#PopUpGeneral").css("display", "none");
                    $("#LabelDetail").empty();
                    buttonPreviewGenerator($(this).attr("name"), false);
                    
                    stringDetailKey = stringPrefixText + stringInfixName + stringDetailSuffix;
                    arrayDelete(arrayHealthQuestionnaire, stringDetailKey);
                }

				arrayAdd(arrayHealthQuestionnaire, $(this).attr("name"), getRadioButtonGeneral($(this).attr("name")));
				
				// HARDCODE QUICK FIX FOR INPUT TEXT
					
				var stringInfixHardcode;

				if (stringInfixName.substring(0, 3) == "Pro")
				{
					stringInfixHardcode = stringProspectiveInsuredPrefix;
				}
				else
				{
					stringInfixHardcode = stringPolicyHolderPrefix;
				}
				
				var stringHeightJavaScriptID = stringPrefixText + stringInfixHardcode + "Height";
				var stringHeightJQueryID = stringKres + stringHeightJavaScriptID;
				var stringHeightValue = getTextForm(stringHeightJavaScriptID);
				var stringWeightJavaScriptID = stringPrefixText + stringInfixHardcode + "Weight";
				var stringWeightJQueryID = stringKres + stringHeightJavaScriptID;
				var stringWeightValue = getTextForm(stringWeightJavaScriptID);
				var stringBabyHeightJavaScriptID = stringPrefixText + stringInfixHardcode + "BabyHeight";
				var stringBabyHeightJQueryID = stringKres + stringHeightJavaScriptID;
				var stringBabyHeightValue = getTextForm(stringBabyHeightJavaScriptID);
				var stringBabyWeightJavaScriptID = stringPrefixText + stringInfixHardcode + "BabyWeight";
				var stringBabyWeightJQueryID = stringKres + stringHeightJavaScriptID;
				var stringBabyWeightValue = getTextForm(stringBabyWeightJavaScriptID);
				var stringPregnantWeekJavaScriptID = stringPrefixText + stringInfixHardcode + "PregnantWeek";
				var stringPregnantWeekJQueryID = stringKres + stringPregnantWeekJavaScriptID;
				var stringPregnantWeekValue = getTextForm(stringPregnantWeekJavaScriptID);
				var stringPregnancyJavaScriptID = stringPrefixRadioButton + stringInfixHardcode + "Pregnancy";
				var stringPregnancyJQueryID = stringKres + stringPregnancyJavaScriptID;
				var stringPregnancyValue = getRadioButtonGeneral(stringPregnancyJavaScriptID);
				var stringWeightChangeJavaScriptID = stringPrefixRadioButton + stringInfixHardcode + "WeightChange";
				var stringWeightChangeJQueryID = stringKres + stringWeightChangeJavaScriptID;
				var stringWeightChangeValue = getRadioButtonGeneral(stringWeightChangeJavaScriptID);
				
				setHardCode(arrayHealthQuestionnaire, stringHeightJavaScriptID, stringHeightValue);
				setHardCode(arrayHealthQuestionnaire, stringWeightJavaScriptID, stringWeightValue);
				setHardCode(arrayHealthQuestionnaire, stringBabyHeightJavaScriptID, stringBabyHeightValue);
				setHardCode(arrayHealthQuestionnaire, stringBabyWeightJavaScriptID, stringBabyWeightValue);
				setHardCode(arrayHealthQuestionnaire, stringPregnantWeekJavaScriptID, stringPregnantWeekValue);
				setHardCode(arrayHealthQuestionnaire, stringPregnancyJavaScriptID, stringPregnancyValue);
				setHardCode(arrayHealthQuestionnaire, stringWeightChangeJavaScriptID, stringWeightChangeValue);
				
                stringRadioButtonName = $(this).attr("name");
            });
        }
        else if ($(this).data("popup-type") == stringPopUpTypeHealth)
        {
            $("input:radio[name='" + $(this).attr("name") + "']").change(function()
            {
				stringInfixName = releasePrefix($(this).attr("name"));
				
                if ($(this).val() == "true")
                {
                    popUpHealthShow($(this).attr("name"), true);
					
					if (stringInfixName.substring(0, 3) == "Pol")
					{
						setRadioButtonGeneral("RadioButtonPolicyHolderMedicalTreatment", true);
					}
					else
					{
						setRadioButtonGeneral("RadioButtonProspectiveInsuredMedicalTreatment", true);
					}
                }
                else
                {
                    $("#PopUpHealth").css("display", "none");
                    
                    $("#PopUpHealth input[type=text]").each(function()
                    {
                        var stringID = $(this).attr("id");
                        var stringName = releasePrefix(stringID);
                        $(this).empty();
                        stringDetailKey = stringPrefixText + stringInfixName + stringName;
                        arrayDelete(arrayHealthQuestionnaire, stringDetailKey);
                    });
                    
                    buttonPreviewGenerator($(this).attr("name"), false);
                }
                
				arrayAdd(arrayHealthQuestionnaire, $(this).attr("name"), getRadioButtonGeneral($(this).attr("name")));
				
                stringRadioButtonName = $(this).attr("name");
            });
        }
        else if ($(this).data("popup-type") == stringPopUpTypeSPAJProposal)
        {
            $("input:radio[name='" + $(this).attr("name") + "']").change(function()
            {
				var stringInfix = releasePrefix($(this).attr("name"));
				
                if ($(this).val() == "true")
                {
                    popUpSPAJProposalShow($(this).attr("name"), null, "PopUpSPAJProposal", arrayHealthQuestionnaire);
					$("#ButtonAddSPAJProposal").css("display", "block");
                }
                else
                {
					$("#PopUpSPAJProposal input[type=text]").each(function()
                    {
                        var stringID = $(this).attr("id");
                        var stringSuffix = releasePrefix(stringID);
						
                        $(this).empty();
                        stringDetailKey = stringPrefixText + stringInfix + stringSuffix;

						for (var k = 0; k < arrayHealthQuestionnaire.length; k++)
						{
							if (stringDetailKey == arrayHealthQuestionnaire[i].elementID.substring(0, stringDetailKey.length))
							{
								arrayDelete(arrayHealthQuestionnaire, stringDetailKey);
							}
							else
							{
								
							}
						}
                    });
					
                    $("#ButtonAddSPAJProposal").css("display", "none");
					tableSPAJProposalGenerator(stringInfix, "SPAJProposalList", arrayHealthQuestionnaire);
                }

				arrayAdd(arrayHealthQuestionnaire, $(this).attr("name"), getRadioButtonGeneral($(this).attr("name")));
                stringRadioButtonName = $(this).attr("name");
            });
        }
		else if ($(this).data("popup-type") == stringPopUpTypeHardCopy)
        {
            $("input:radio[name='" + $(this).attr("name") + "']").change(function()
            {
				stringInfixName = releasePrefix($(this).attr("name"));
				
                if ($(this).val() == "true")
                {
					var stringIndicator = $(this).attr("data-question-title");
					ReplaceHTMLNameOnValidate("","Harap mengisi form kuesioner " + stringIndicator + " melalui hard copy.");
                    //alert("Harap mengisi form kuesioner nomor 6 melalui hard copy.");
					
					if (stringInfixName.substring(0, 3) == "Pol")
					{
						setRadioButtonGeneral("RadioButtonPolicyHolderHealthDissorder", true);
					}
					else
					{
						setRadioButtonGeneral("RadioButtonProspectiveInsuredHealthDissorder", true);
					}
                }
                else
                {
					
                }
				
				arrayAdd(arrayHealthQuestionnaire, $(this).attr("name"), getRadioButtonGeneral($(this).attr("name")));

                stringRadioButtonName = $(this).attr("name");
				previewArrayObject(arrayHealthQuestionnaire);
            });
        }
		else if ($(this).data("popup-type") == stringPopUpTypeCardiac)
        {
            $("input:radio[name='" + $(this).attr("name") + "']").change(function()
            {
				stringInfixName = releasePrefix($(this).attr("name"));
				
                if ($(this).val() == "true")
                {
                    $(stringKres + $(this).data("popup-type")).css("display", "block");
                }
                else
                {
					
                }

				arrayAdd(arrayHealthQuestionnaire, $(this).attr("name"), getRadioButtonGeneral($(this).attr("name")));
                stringRadioButtonName = $(this).attr("name");
            });
        }
		else if ($(this).data("popup-type") == "input")
		{
			$("input:radio[name='" + $(this).attr("name") + "']").change(function()
            {
				arrayAdd(arrayHealthQuestionnaire, $(this).attr("name"), getRadioButtonGeneral($(this).attr("name")));
                stringRadioButtonName = $(this).attr("name");
				previewArrayObject(arrayHealthQuestionnaire);
            });
		}
        else
        {
            
        }
    });
}

function setHardCode(arrayContent, stringKey, stringValue)
{
	if (stringValue == null || stringValue == undefined || stringValue == "")
	{
		
	}
	else
	{
		arrayAdd(arrayContent, stringKey, stringValue);
	}
}


// ARRAY ACTION

function arrayAdd(arrayObject, stringKey, stringValue)
{
    var booleanPushState = true;
    
    if (arrayObject.length > 0)
    {
        for (var i = 0; i < arrayObject.length; i++)
        {
            if (arrayObject[i].elementID == stringKey)
            {
                arrayObject[i].Value = stringValue;
                booleanPushState = false;
            }
            else
            {

            }
        }

        if (booleanPushState == true)
        {
            arrayObject.push({ elementID: stringKey, Value: stringValue });
        }
        else
        {

        }
    }
    else
    {
        arrayObject.push({ elementID: stringKey, Value: stringValue });
    }
}

function arrayDelete(arrayObject, stringKey)
{
    for (var i = 0; i < arrayObject.length; i++)
    {
        if (arrayObject[i].elementID === stringKey) 
        {
            arrayObject.splice(i,1);
            break;
        }
        else
        {
            
        }
    }
}

function arrayFind(arrayObject, stringKey)
{
    var stringValue = null;
    
    for (var i = 0; i < arrayObject.length; i++)
    {
        if (arrayObject[i].elementID === stringKey) 
        {
            stringValue = arrayObject[i].Value;
            break;
        }
        else
        {
            
        }
    }
    
    return stringValue;
}

function buttonPopUpGeneralGenerator()
{
    var stringRadioButtonKey;
    var stringRadioButtonValue;
    var stringDetailKey;
    var stringDetailValue;
    var stringPopUpJavaScriptID = "PopUpGeneral";
    var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
    var stringInputJavaScriptID = "TextDetail";
    var stringInputJQueryID = stringKres + stringInputJavaScriptID;
    
    $("input:button[id^='ButtonPreview']").each(function()
    {
        if ($(this).data("popup-type") == stringPopUpTypeGeneral)
        {
            var stringButtonPreviewJQueryID = stringKres + $(this).attr("id");
            var stringButtonPreviewName = $(this).attr("name");
            
            $(stringButtonPreviewJQueryID).click(function()
            {
                stringRadioButtonName = stringButtonPreviewName;
                popUpGeneralShow(stringButtonPreviewName, false);
            });
        }
        else
        {
            
        }
    });
    
    $(stringPopUpJQueryID + " #ButtonCancel").click(function()
    {
        stringRadioButtonKey = stringRadioButtonName;
        stringRadioButtonValue = getRadioButtonGeneral(stringRadioButtonName);
        
        setRadioButtonGeneral(stringRadioButtonKey, null);
        arrayAdd(arrayHealthQuestionnaire, stringRadioButtonKey, stringRadioButtonValue);
        
        $(stringPopUpJQueryID).css("display", "none");
    });

    $(stringPopUpJQueryID + " #ButtonDone").click(function()
    {
        stringRadioButtonKey = stringRadioButtonName;
        stringRadioButtonValue = getRadioButtonGeneral(stringRadioButtonName);
        stringDetailKey = stringPrefixText + stringRadioButtonName.substring(stringPrefixRadioButton.length, stringRadioButtonName.length) + stringDetailSuffix;
        stringDetailValue = getTextGeneral(stringInputJavaScriptID);
        
        if (validateTextGeneral(stringInputJQueryID) == true)
        {
            arrayAdd(arrayHealthQuestionnaire, stringRadioButtonKey, stringRadioButtonValue);
            arrayAdd(arrayHealthQuestionnaire, stringDetailKey, stringDetailValue);
            buttonPreviewGenerator(stringRadioButtonKey, true);

            $(stringPopUpJQueryID).css("display", "none");
            $(stringInputJQueryID).empty();
			// previewArrayObject(arrayHealthQuestionnaire);
        }
        else
        {
            validationMessage("Harap lengkapi form terlebih dahulu !.", null);
        }
    });
}

function previewArrayObject(arrayContent)
{
	var stringObjectPreview = "";

	for (var i = 0; i < arrayContent.length; i++)
	{
		stringObjectPreview += "key : " + arrayContent[i].elementID + "\nvalue : " + arrayContent[i].Value + "\n";
	}

	alert(stringObjectPreview);
}	

function buttonPopUpHealthGenerator()
{
    var stringRadioButtonKey;
    var stringRadioButtonValue;
    var stringDetailKey;
    var stringDetailValue;
    var stringPopUpJavaScriptID = "PopUpHealth";
    var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
    var stringInfixName;
    var stringInputJavaScriptID;
    var stringInputJQueryID;
    
    $("input:button[id^='ButtonPreview']").each(function()
    {
        if ($(this).data("popup-type") == stringPopUpTypeHealth)
        {
            var stringButtonPreviewJavaScriptID = $(this).attr("id");
            var stringButtonPreviewJQueryID = stringKres + stringButtonPreviewJavaScriptID;
            var stringButtonPreviewName = $(this).attr("name");
            
            $(stringButtonPreviewJQueryID).click(function()
            {
                stringRadioButtonName = stringButtonPreviewName;
                popUpHealthShow(stringButtonPreviewName, false);
            });
        }
        else
        {
            
        }
    });
    
    $(stringPopUpJQueryID + " #ButtonCancel").click(function()
    {
        stringRadioButtonKey = stringRadioButtonName;
        stringRadioButtonValue = getRadioButtonGeneral(stringRadioButtonName);
        
        setRadioButtonGeneral(stringRadioButtonKey, null);
        arrayAdd(arrayHealthQuestionnaire, stringRadioButtonKey, stringRadioButtonValue);
        
        $(stringPopUpJQueryID).css("display", "none");
    });

    $(stringPopUpJQueryID + " #ButtonDone").click(function()
    {
        stringRadioButtonKey = stringRadioButtonName;
        stringRadioButtonValue = getRadioButtonGeneral(stringRadioButtonName);
        stringInfixName = stringRadioButtonKey.substring(stringPrefixRadioButton.length, stringRadioButtonKey.length);
        stateValidation = true;
		
        $(stringPopUpJQueryID + " form input[type=text]").each(function()
        {
            stringInputJavaScriptID = $(this).attr("id");
            stringInputJQueryID = stringKres + stringInputJavaScriptID;
            stringDetailKey = stringPrefixText + stringInfixName + stringInputJavaScriptID.substring(stringPrefixText.length, stringInputJavaScriptID.length);

            if (validateTextGeneral(stringInputJQueryID) == false)
            {
				validationMessage("Harap lengkapi form terlebih dahulu !.", null);
				return false;
            }
            else
            {
				stringDetailValue = getTextGeneral(stringInputJavaScriptID);
                arrayAdd(arrayHealthQuestionnaire, stringDetailKey, stringDetailValue);
                buttonPreviewGenerator(stringRadioButtonKey, true);
            }
        });

		if (stateValidation == false)
		{
			
		}
		else
		{
			arrayAdd(arrayHealthQuestionnaire, stringRadioButtonKey, stringRadioButtonValue);
			$(stringPopUpJQueryID).css("display", "none");

			$(stringPopUpJQueryID + " form input[type=text]").each(function()
			{
				$(this).val("");
			});
		}
        
        // previewArrayObject(arrayHealthQuestionnaire);
    });
}

function buttonViewBeneficiariesList(stringButtonViewJavaScriptID, stringButtonViewName)
{
	popUpBeneficiariesListShow(stringButtonViewName);
}

function buttonViewSPAJProposal(stringButtonViewJavaScriptID, stringButtonViewName)
{
	popUpSPAJProposalShow(stringButtonViewJavaScriptID, stringButtonViewName, "PopUpSPAJProposal", arrayHealthQuestionnaire);
}

function buttonDeleteBeneficiariesList(stringButtonViewJavaScriptID, stringButtonViewName)
{
	var stringButtonViewJQueryID = stringKres + stringButtonViewJavaScriptID;
	var intSelectedSharePercentage = arrayFind(arrayBeneficiariesList, stringPrefixText + stringBeneficiariesListInfix + "SharePercentage" + stringButtonViewName);
	intSharePercentage = parseInt(intSharePercentage, 10) - parseInt(intSelectedSharePercentage, 10);
	setTextForm(stringPrefixText + stringBeneficiariesListInfix + stringSharePercentageSuffix, intSharePercentage);
	var arrayTemporary = [];

	for (var i = 0; i < arrayBeneficiariesList.length; i++)
	{
		var stringKeyForDelete = arrayBeneficiariesList[i].elementID.substring(arrayBeneficiariesList[i].elementID.length - stringButtonViewName.length, arrayBeneficiariesList[i].elementID.length);

		if (stringKeyForDelete == stringButtonViewName)
		{
			arrayAdd(arrayTemporary, arrayBeneficiariesList[i].elementID,arrayBeneficiariesList[i].Value );
		}
		else
		{

		}
	}
	
	for (var i = 0; i < arrayTemporary.length; i++)
	{
		arrayDelete(arrayBeneficiariesList, arrayTemporary[i].elementID);
	}

	tableBeneficiariesListGenerator("TableBeneficiariesList", arrayBeneficiariesList);
}

function buttonDeleteSPAJProposal(stringButtonViewJavaScriptID, stringButtonViewName)
{
	var stringButtonViewJQueryID = stringKres + stringButtonViewJavaScriptID;
	var arrayTemporary = [];
	
	for (var i = 0; i < arrayHealthQuestionnaire.length; i++)
	{
		var stringKeyForDelete = arrayHealthQuestionnaire[i].elementID.substring(arrayHealthQuestionnaire[i].elementID.length - stringButtonViewName.length, arrayHealthQuestionnaire[i].elementID.length);
		
		if (stringKeyForDelete == stringButtonViewName)
		{
			arrayAdd(arrayTemporary, arrayHealthQuestionnaire[i].elementID);
		}
		else
		{

		}
	}

	for (var i = 0; i < arrayTemporary.length; i++)
	{
		arrayDelete(arrayHealthQuestionnaire, arrayTemporary[i].elementID);
	}
	
	tableSPAJProposalGenerator(releasePrefix(stringButtonViewJavaScriptID), "SPAJProposalList", arrayHealthQuestionnaire);
}

function buttonPopUpBeneficiariesListGenerator()
{
    var stringKey;
    var stringValue;
    var stringPopUpJavaScriptID = "PopUpBeneficiariesList";
    var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
    var stringInputJavaScriptID;
    var stringInputJQueryID;
	var stringInputIDWithoutPrefix;
	
    $(stringPopUpJQueryID + " #ButtonCancel").click(function()
    {
        $(stringPopUpJQueryID).css("display", "none");
    });

    $(stringPopUpJQueryID + " #ButtonDone").click(function()
    {
		if (intBeneficiariesListID < 11 && intSharePercentage <= 100)
		{
			var stringSharePercentageJavaScriptID = stringPrefixText + stringSharePercentageSuffix;
			var stringSharePercentageJQueryID = stringKres + stringSharePercentageJavaScriptID;
			var intCurrentSharePercentage;
			
			if (validateTextGeneral(stringSharePercentageJQueryID) == true)
			{
				intCurrentSharePercentage = parseInt(intSharePercentage, 10) + parseInt(getTextForm(stringSharePercentageJavaScriptID), 10);
				
				if (intCurrentSharePercentage <= 100)
				{
					stateValidation = true;
					
					$(stringPopUpJQueryID + " form input[type=text]").each(function()
					{
						stringInputJavaScriptID = $(this).attr("id");
						stringInputJQueryID = stringKres + stringInputJavaScriptID;

						if (stringInputJavaScriptID.substring(0, stringPrefixDate.length) == stringPrefixDate)
						{
							stringInputIDWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixDate.length, stringInputJavaScriptID.length);
							stringKey = stringPrefixDate + stringBeneficiariesListInfix + stringInputIDWithoutPrefix + intBeneficiariesListID;
						}
						else
						{
							stringInputIDWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixText.length, stringInputJavaScriptID.length);
							stringKey = stringPrefixText + stringBeneficiariesListInfix + stringInputIDWithoutPrefix + intBeneficiariesListID;
						}
						
						if (validateTextGeneral(stringInputJQueryID) == false)
						{
							validationMessage("Harap lengkapi form terlebih dahulu !.", null);
							return false;
						}
						else
						{
							stringValue = getTextGeneral(stringInputJavaScriptID);
							arrayAdd(arrayBeneficiariesList, stringKey, stringValue);
						}
					});

					$(stringPopUpJQueryID + " form select").each(function()
					{
						stringInputJavaScriptID = $(this).attr("id");
						stringInputJQueryID = stringKres + stringInputJavaScriptID;
						stringInputIDWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixSelect.length, stringInputJavaScriptID.length);

						stringKey = stringPrefixSelect + stringBeneficiariesListInfix + stringInputIDWithoutPrefix + intBeneficiariesListID;

						if (validateSelectGeneral(stringInputJQueryID) == false)
						{
							validationMessage("Harap lengkapi form terlebih dahulu !.", null);
							return false;
						}
						else
						{
							stringValue = getSelectForm(stringInputJavaScriptID);
							arrayAdd(arrayBeneficiariesList, stringKey, stringValue);
						}
					});
					
					var stringRadioButtonFlag = 0;
					
					$(stringPopUpJQueryID + " form input:radio").each(function()
					{
						stringInputName = $(this).attr("name");
						stringInputJavaScriptID = $(this).attr("id");
						stringInputJQueryID = stringKres + stringInputJavaScriptID;
						stringInputNameWithoutPrefix = stringInputJavaScriptID.substring(stringPrefixRadioButton.length, stringInputName.length);

						stringKey = stringPrefixRadioButton + stringBeneficiariesListInfix + stringInputNameWithoutPrefix + intBeneficiariesListID;
						
//						if (validateRadioButtonGeneral(stringInputName) == false)
//						{
//							alert("salah " + $(this).attr("name") + " " + getRadioButtonGeneral($(this).attr("name")) + " " + validateRadioButtonGeneral(stringInputName));
//							validationMessage("Harap lengkapi form terlebih dahulu !.", null);
//							return false;
//						}
//						else
//						{
//							alert("bener " + $(this).attr("name") + " " + getRadioButtonGeneral($(this).attr("name")) + " " + validateRadioButtonGeneral(stringInputName));
							stringValue = getRadioButtonGeneral(stringInputName);
							arrayAdd(arrayBeneficiariesList, stringKey, stringValue);
						//}
					});

					if (stateValidation == false)
					{
						
					}
					else
					{
						intBeneficiariesListID ++;
						intSharePercentage = parseInt(intSharePercentage, 10) + parseInt(getTextForm(stringSharePercentageJavaScriptID), 10);
						setTextForm(stringPrefixText + stringBeneficiariesListInfix + stringSharePercentageSuffix, intSharePercentage);

						$(stringPopUpJQueryID).css("display", "none");

						/* $(stringPopUpJQueryID + " form input[type=text]").each(function()
						{
							$(this).val("");
						});

						$(stringPopUpJQueryID + " form select").each(function()
						{
							$(stringKres + $(this).attr("id") + " :nth-child(1)").prop("selected", true);
						});

						$(stringPopUpJQueryID + " form input:radio").each(function()
						{
							$(this).prop("checked", false);
						}); */

						tableBeneficiariesListGenerator("TableBeneficiariesList", arrayBeneficiariesList);
						// previewArrayObject(arrayHealthQuestionnaire);
					}
				}
				else
				{
					ReplaceHTMLNameOnValidate("","Share percentage melebihi 100 persen !.");
					//alert("Share percentage melebihi 100 persen !.");
				}
			}
			else
			{
				validationMessage("Harap lengkapi form terlebih dahulu !.", null);
				return false;
			}
		}
		else
		{
			
		}
    });
}

function buttonPopUpSPAJProposalGenerator()
{
    var stringKey;
    var stringValue;
    var stringPopUpJavaScriptID = "PopUpSPAJProposal";
    var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;
    var stringInputJavaScriptID;
    var stringInputJQueryID;
	var stringInputSuffix;
	var stringTriggerInfix;
	
    $(stringPopUpJQueryID + " #ButtonCancel").click(function()
    {
        $(stringPopUpJQueryID).css("display", "none");
    });

    $(stringPopUpJQueryID + " #ButtonDone").click(function()
    {
		stringTriggerInfix = releasePrefix(stringRadioButtonName);
		stateValidation = true;
		
		$(stringPopUpJQueryID + " form input[type=text]").each(function()
		{
			stringInputJavaScriptID = $(this).attr("id");
			stringInputJQueryID = stringKres + stringInputJavaScriptID;

			stringInputSuffix = releasePrefix(stringInputJavaScriptID);
        	stringKey = setKeyPrefix(stringInputJavaScriptID, stringTriggerInfix + stringInputSuffix + intSPAJProposalID);
			
			if (validateTextGeneral(stringInputJQueryID) == false)
			{
				validationMessage("Harap lengkapi form terlebih dahulu !.", null);
				return false;
			}
			else
			{
				stringValue = getTextGeneral(stringInputJavaScriptID);
				arrayAdd(arrayHealthQuestionnaire, stringKey, stringValue);
			}
		});
		
		if (stateValidation == false)
		{
			
		}
		else
		{
			arrayAdd(arrayHealthQuestionnaire, stringRadioButtonName, getRadioButtonGeneral(stringRadioButtonName));
			$(stringPopUpJQueryID).css("display", "none");
			intSPAJProposalID++;

			$(stringPopUpJQueryID + " form input[type=text]").each(function()
			{
				$(this).val("");
			});

			tableSPAJProposalGenerator(stringTriggerInfix, "SPAJProposalList", arrayHealthQuestionnaire);
			// previewArrayObject(arrayHealthQuestionnaire);
		}
    });
}

function tableBeneficiariesListGenerator(stringTableJavaScriptID, arrayContent)
{
	var stringTableJQueryID = stringKres + stringTableJavaScriptID;
	var stringContentName;
	var stringInputIDSuffix = "FullName";
	var stringKey = stringPrefixText + stringBeneficiariesListInfix + stringInputIDSuffix;
	var stringKeyID;
	var stringFlag = 0;
	
	$(stringTableJQueryID + " tbody").empty();
	
	for (var i = 0; i < arrayContent.length; i++)
	{
		stringKeyID = arrayContent[i].elementID.substring(stringKey.length, arrayContent[i].elementID.length);
		stringKey = stringPrefixText + stringBeneficiariesListInfix + stringInputIDSuffix + stringKeyID;
		stringContentName = arrayFind(arrayContent, stringKey);
		
//		stringSexKey = stringPrefixText + stringBeneficiariesListInfix + stringInputIDSuffix + stringKeyID;
//		stringSexValue = arrayFind(arrayContent, stringKey);
//		stringRelationshipKey = stringPrefixText + stringBeneficiariesListInfix + stringInputIDSuffix + stringKeyID;
//		stringRelationshipValue = arrayFind(arrayContent, stringKey);
//		stringSharePercentage = stringPrefixText + stringBeneficiariesListInfix + stringInputIDSuffix + stringKeyID;
//		stringSharePercentage = arrayFind(arrayContent, stringKey);

		if (stringFlag == 0 || stringFlag != stringKeyID)
		{
			if (stringContentName == null || stringContentName == undefined)
			{

			}
			else
			{
				$(stringTableJQueryID + " tbody").append
				(
					"<tr>" + 
						"<td>" + stringContentName + "</td>" + 
						"<td><input type='button' id='" + stringButtonViewPrefix + stringKeyID + "' class='ButtonPrimary ButtonView' value='View' name='" + stringKeyID + "' onclick='buttonViewBeneficiariesList(this.id, this.name)'/></td>" + 
						"<td><input type='button' id='" + stringButtonDeletePrefix + stringKeyID + "' class='ButtonPrimary ButtonDelete' value='Delete' name='" + stringKeyID + "' onclick='buttonDeleteBeneficiariesList(this.id, this.name)'/></td>" + 
					"</tr>"
				);
				
				stringFlag = stringKeyID;
			}
		}
		else
		{
			
		}
	}
}

function tableSPAJProposalGenerator(stringTriggerKey, stringContainerJavaScriptID, arrayContent)
{
	var stringContainerJQueryID = stringKres + stringContainerJavaScriptID;
	var stringContentName;
	var stringInputIDSuffix = "CompanyName";
	var stringKey = stringPrefixText + stringTriggerKey + stringInputIDSuffix;
	var stringKeyID;
	var stringFlag = 0;
	
	$(stringContainerJQueryID).empty();
	
	for (var i = 0; i < arrayContent.length; i++)
	{
		stringKeyID = arrayContent[i].elementID.substring(stringKey.length, arrayContent[i].elementID.length);
		stringKey = stringPrefixText + stringTriggerKey + stringInputIDSuffix + stringKeyID;
		
		stringContentName = arrayFind(arrayContent, stringKey);
		
		if (stringFlag == 0 || stringFlag != stringKeyID)
		{
			if (stringContentName == null || stringContentName == undefined)
			{

			}
			else
			{
				
				$(stringContainerJQueryID).append
				(
					"<div style='display: block; margin-bottom: -15px;'>" + 
					"<input type='button' id='" + stringPrefixText + stringTriggerKey + "' class='ButtonView PositionerLeft' value='View " + arrayContent[i].Value + "' name='" + stringKeyID + "' onclick='buttonViewSPAJProposal(this.id, this.name)'/>" + 
					"<input type='button' id='" + stringPrefixText + stringTriggerKey + "' class='ButtonDelete PositionerLeft' value='Delete' name='" + stringKeyID + "' onclick='buttonDeleteSPAJProposal(this.id, this.name)'/><br/>" + 
					"</div><br>"
				);
				
				stringFlag = stringKeyID;
			}
		}
		else
		{
			
		}
	}
}


// VALIDATE

function validateState(stateValidate)
{
    if (stateValidate == true)
    {
        if (stateValidation == true)
        {
            stateValidation = true;
        }
        else
        {
            
        }
    }
    else
    {
    	stateValidation = false;
    }
}

function validationMessage(stringMessageNegative, stringMessagePositive)
{
    if (stateValidation == false)
    {
		ReplaceHTMLNameOnValidate("", stringMessageNegative);
        //alert(stringMessageNegative);
    }
    else
    {
        if (stringMessageNegative == null)
        {

        }
        else
        {
			ReplaceHTMLNameOnValidate("", stringMessagePositive);
            //alert(stringMessagePositive)
        }
    }
}

function validatePush(objectContent, stringKey, stringValue)
{
    if (stringValue == undefined | stringValue == "")
    {
        
    }
    else
    {
        objectContent.push({ elementID: stringKey, Value: stringValue });
    }
}

function validateTextGeneral(stringInputJQueryID)
{
	var stringInputValue = $(stringInputJQueryID).val();
	
	if (stringInputValue == undefined || stringInputValue == null || stringInputValue == "")
    {
        validateState(false);
        return false;
    }
    else
    {
		if (stringInputValue.length > 0)
		{
			validateState(true);
			return true;
		}
		else
		{
			validateState(false);
			return false;
		}
    }
}

function validateRadioButtonGeneral(radioButtonName)
{
	var stringValue = getRadioButtonGeneral(radioButtonName);
	// alert("1 " + stringValue);
    // if ($("input:radio[name=" + radioButtonName + "]:checked").val() != undefined)
	if (stringValue == undefined)
    {
		// alert("2 " + stringValue)
        validateState(false);
        return false;
    }
    else
    {
		validateState(true);
        return true;
    }
}

function validateRadioButtonGeneral(stringInputJQueryID)
{
    if ($(stringInputJQueryID).val() != undefined)
    {
        validateState(true);
        return true;
    }
    else
    {
        validateState(false);
        return false;
    }
}

function validateSelectGeneral(stringInputJQueryID)
{
	var stringInputValue = $(stringInputJQueryID).val();
	
    if (stringInputValue == "null")
    {
        validateState(false);
        return false;
    }
    else
    {
		validateState(true);
        return true;
    }
}


// SETTER

function setBoxGeneral(stringID, stringValue)
{
    var stringJQueryID = stringKres + stringID;
    
    for (var i = 0; i < stringValue.length; i++)
    {
        $(stringJQueryID + " tbody tr " + stringJQueryID + i).append(stringValue[i]);
    }
}

function setTextGeneral(stringID, stringValue)
{
    var stringJQueryID = stringKres + stringID;
    
    $(stringJQueryID).val(stringValue);
}

function setLineGeneral(stringID, stringValue)
{
    var stringJQueryID = stringKres + stringID;
    
    $(stringJQueryID).empty();
    $(stringJQueryID).append(stringValue);
}

function setRadioButtonGeneral(stringName, stringValue)
{
    if (stringValue != null)
	{
		var radioButton = $("input:radio[name=" + stringName + "]");
    	radioButton.filter("[value='" + stringValue + "']").prop("checked", true);
	}
	else
	{
		$("input:radio[name='" + stringName + "']").each(function()
		{
			$(this).prop("checked", false);
		});
	}
}

function setSelectForm(stringID, stringValue)
{
    setTextGeneral(stringID, stringValue);
}

function setSelectPDF(stringID, stringValue)
{
    setBoxGeneral(stringID, stringValue);
}

function setCheckboxGeneral(stringName, stringValue)
{
    var radioButton = $("input:checkbox[name=" + stringName + "]");
    
    if (radioButton.is(":checked") == false) 
    {
        radioButton.filter("[value=" + stringValue + "]").prop("checked", true);
    }
    else
    {
        
    }
}

function setTextForm(stringID, stringValue)
{
    setTextGeneral(stringID, stringValue);
}

function setTextPDF(stringID, stringValue)
{
    if (stringValue.indexOf(stringSeparatorTelephone) > 0)
    {
		var stringHandphoneSuffixID = stringID.substring(stringID.length - stringHandphoneSuffix.length - 1, stringID.length - 1);
		
		if (stringHandphoneSuffixID != stringHandphoneSuffix)
		{
			var arrayTelephoneString = stringValue.split(stringSeparatorTelephone);
			var arrayTelephoneID = [stringIDPrefix, stringIDInfix];

			for(var i = 0; i < arrayTelephoneString.length; i++)
			{
				setBoxGeneral(stringID + arrayTelephoneID[i], arrayTelephoneString[i]);
			}
		}
		else
		{
			setBoxGeneral(stringID, stringValue);
		}
    }
    else
    {
        var stringJQueryID = stringKres + stringID;
        
        if ($(stringJQueryID).is("div") == true)
        {
            setLineGeneral(stringID, stringValue);
        }
        else if ($(stringJQueryID).is("td") == true)
        {
            setTextGeneral(stringID, stringValue);
        }
        else
        {
            setBoxGeneral(stringID, stringValue);
        }
    }
}

function setDateForm(stringID, stringValue)
{
    setTextGeneral(stringID, stringValue);
}

function setDatePDF(stringID, stringContent)
{
    var arrayDateID = [stringIDDay, stringIDMonth, stringIDYear];
    var arrayDateString = stringContent.split(stringSeparatorDate);    			
		
	for (var i = 0; i < arrayDateString.length; i++)
	{ 
		if ($(stringKres + stringID + arrayDateID[i]).is("table") == true)
		{
			setBoxGeneral(stringID + arrayDateID[i], arrayDateString[i]);	
		}
		else
		{
			setLineGeneral(stringID + arrayDateID[i], arrayDateString[i]);	
		}			
	}			
}

function setAreaForm(stringID, stringValue)
{
    setTextGeneral(stringID, stringValue);
}

function setAreaPDF(stringID, stringValue)
{
    setBoxGeneral(stringID, stringValue);
}

function setNumberForm(stringID)
{
    return setTextGeneral(stringID, stringValue);
}

function setNumberPDF(stringID)
{
    return setBoxGeneral(stringID, stringValue);
}

function setEmailForm(stringID)
{
    return setTextGeneral(stringID), stringValue;
}

function getEmailPDF(stringID)
{
    return setBoxGeneral(stringID, stringValue);
}


// GETTER

function getBoxGeneral(stringID)
{
    var stringJQueryID = stringKres + stringID;
    var stringContent = "";
    
    $(stringJQueryID + " tbody tr td").each(function(index)
    {
        var stringText = $(this).text();
        
        if (stringText.length > 0)
        {
            stringContent += stringText;
        }
        else
        {
            
        }
    });
    
    return stringContent;
}

function getTextGeneral(stringID)
{
    var stringJQueryID = stringKres + stringID;
    
    return $(stringJQueryID).val();
}

function getRadioButtonGeneral(stringName)
{
    var stringRadioButtonValue;
    
    stringRadioButtonValue = $("input:radio[name=" + stringName + "]:checked").val();
    
    return stringRadioButtonValue;
}

function getSelectForm(stringID)
{
    return getTextGeneral(stringID);
}

function getSelectPDF(stringID)
{
    return getBoxGeneral(stringID);
}

function getCheckboxGeneral(stringID)
{
	var stringInputJQueryID = stringKres + stringID;
    var stringCheckboxValue;
    
    if (validateCheckboxGeneral(stringName) == false)
    {
        // alert("Harap pilih radio button di bawah ini !.");
    }
    else
    {
        stringCheckboxValue = $(stringInputJQUeryID).val();
    }
    
    return stringCheckboxValue;
}

function getTextForm(stringID)
{
    return getTextGeneral(stringID);
}

//if (validateTextGeneral(stringID) == false)
//    {
//        // alert("Harap isi kolom di bawah ini !.");
//    }
//    else
//    {
//        
//    }

function getTextPDF(stringID)
{
    var stringTextValue = $(stringID).val();
    var stringJQueryID = stringKres + stringID;
    var stringContent = "";
    
    if (stringJQueryID.is("table") == true)
    {
        if ((stringJQueryID + "Prefix").length > 0)
        {
            stringContent += getBoxGeneral(stringJQueryID + "Prefix");
            stringContent += stringSeparatorTelephone;
            stringContent += getBoxGeneral(stringJQueryID + "Infix");
        }
        else
        {
            stringContent += getBoxGeneral(stringJQueryID);
        }
    }
    else if (stringJQueryID.is("td") == true)
    {
        stringContent = $(stringJQueryID).text();
    }
    else
    {
        stringContent = $(stringJQueryID).text();
    }
    
    return stringContent;
}
    
function getDateForm(stringID)
{
    return getTextGeneral(stringID);
}

function getDatePDF(stringID)
{
    return getBoxGeneral(stringID);
}

function getAreaForm(stringID)
{
    return getTextGeneral(stringID);
}

function getAreaPDF(stringID)
{
    return getBoxGeneral(stringID);
}

function getNumberForm(stringID)
{
    return getTextGeneral(stringID);
}

function getNumberPDF(stringID)
{
    return getBoxGeneral(stringID);
}

function getEmailForm(stringID)
{
    return getTextGeneral(stringID);
}

function getEmailPDF(stringID)
{
    return getBoxGeneral(stringID);
}


// TABLE FUNCTION

function numberGenerator(stringNameInfix, indexRow)
{
	var stringCellNumberJQueryID = stringKres + stringCellPrefix + stringNameInfix + stringNumberPrefix + indexRow;
										
	if ($(stringCellNumberJQueryID).text() == "" || $(stringCellNumberJQueryID).text() == undefined || $(stringCellNumberJQueryID).text() == null)
	{
		$(stringCellNumberJQueryID).append(indexRow + 1);
	}
	else
	{

	}
}


// GET FROM DATABASE

function getFromDatabase(objectContent, stringPageType)
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
				// FOR TABLE HEALTH
				
				for (var j = 0; j < arrayHealthTableHeader.length; j++)
				{
					if (stringKey.substring(stringKey.length - arrayHealthTableHeader[j].length, stringKey.length) == arrayHealthTableHeader[j])
					{
						var stringIndicatorPrefix = stringKey.substring(stringPrefixText.length, stringPrefixText.length + 3);
						// var stringIndicatorPolicyHolder = "Pol";
						// var stringIndicatorProspectiveInsured = "Pro";
						var stringTableJQueryID;
						var stringInfix;

						if (stringIndicatorPrefix == stringIndicatorPolicyHolder)
						{
							stringTableJQueryID = stringKres + "TablePolicyHolderIllness";
							stringInfix = stringPolicyHolderPrefix;
						}
						else
						{
							stringTableJQueryID = stringKres + "TableProspectiveInsuredIllness";
							stringInfix = stringProspectiveInsuredPrefix;
						}

						$(stringTableJQueryID + " tbody tr").each(function(indexRow)
						{
							var stringRowJavaScriptID = $(this).attr("id");
							var stringRowJQueryID = stringKres + stringRowJavaScriptID;
							var stringCellJavaScriptID = stringCellPrefix + stringInfix + "Illness" + arrayHealthTableHeader[j];
							var stringCellJQueryID = stringKres + stringCellJavaScriptID + indexRow;
							var stringCellSuffix = stringCellJavaScriptID;
							var booleanBreak = false;
							
							if (stringCellSuffix.substring(stringCellSuffix.length - arrayHealthTableHeader[j].length, stringCellSuffix.length) == arrayHealthTableHeader[j])
							{
								if (j == 1)
								{
									var stringDate = stringValue.split(stringSeparatorDate);
									var stringDay = stringDate[0];
									var stringMonth = stringDate[1];
									var stringYear = stringDate[2];
									stringDate = [stringMonth, stringYear.substring(2, 4)];

									$(stringCellJQueryID + " table").each(function(indexTable)
									{
										var stringBoxID = $(this).attr("id");
										var stringBoxValue = getBoxGeneral(stringBoxID);
										
										if (stringBoxValue == null || stringBoxValue == undefined || stringBoxValue == "")
										{
											setBoxGeneral(stringBoxID, stringDate[indexTable]);
											booleanBreak = true;
										}
										else
										{
											
										}
									});
									
									if (booleanBreak == true)
									{
										return false;
									}
									else
									{
										
									}
								}
								else
								{
									if ($(stringCellJQueryID).text() == "" || $(stringCellJQueryID).text() == undefined || $(stringCellJQueryID).text() == null)
									{
										$(stringCellJQueryID).append(stringValue);
										
										// FOR NUMBER
										
										numberGenerator(stringInfix + "Illness", indexRow);
										
										return false;
									}
									else
									{
										
									}
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
				}
				
				
				// BENEFICIARIES LIST
				
				var stringIDWithoutPrefix = stringKey.substring(stringPrefixText.length, stringKey.length);
				var stringIndicatorPrefix = stringIDWithoutPrefix.substring(0, 3);
				
				if (stringIndicatorPrefix == "Ben")
				{	
					var stringIDWithoutInfix = stringIDWithoutPrefix.substring(stringBeneficiariesListInfix.length, stringIDWithoutPrefix.length - 1);
					var stringTableJQueryID = stringKres + stringTablePrefix + stringBeneficiariesListInfix;
					
					for (var j = 0; j < arrayBeneficiariesListTableHeader.length; j++)
					{
						$(stringTableJQueryID + " tbody tr").each(function(indexRow)
						{
							var stringRowJavaScriptID = $(this).attr("id");
							var stringRowJQueryID = stringKres + stringRowJavaScriptID;
							var stringCellJavaScriptID = stringCellPrefix + stringBeneficiariesListInfix + arrayBeneficiariesListTableHeader[j];
							var stringCellJQueryID = stringKres + stringCellJavaScriptID + indexRow;
							var stringCellSuffix = stringCellJavaScriptID;
							
							if (stringIDWithoutInfix == arrayBeneficiariesListTableHeader[j])
							{
								if ($(stringCellJQueryID).text() == "" || $(stringCellJQueryID).text() == undefined || $(stringCellJQueryID).text() == null)
								{
									$(stringCellJQueryID).append(stringValue);
									
									// FOR NUMBER
										
									numberGenerator(stringBeneficiariesListInfix, indexRow);
									
									return false;
								}
								else
								{

								}
							}
							else
							{

							}
						});
					}
				}
				else
				{

				}
				
				// FOR TABLE SPAJ PROPOSAL
				
				var stringInfix;
				
				if (stringIndicatorPrefix == stringIndicatorPolicyHolder)
				{
					stringTableJQueryID = stringKres + "TablePolicyHolderSPAJProposal";
					stringInfix = stringPolicyHolderPrefix;
				}
				else
				{
					stringTableJQueryID = stringKres + "TableProspectiveInsuredSPAJProposal";
					stringInfix = stringProspectiveInsuredPrefix;
				}
				
				var stringIDWithoutInfix = stringIDWithoutPrefix.substring(stringInfix.length + "SPAJProposal".length, stringIDWithoutPrefix.length - 1);
				
				for (var j = 0; j < arraySPAJProposalTableHeader.length; j++)
				{
					$(stringTableJQueryID + " tbody tr").each(function(indexRow)
					{
						var stringRowJavaScriptID = $(this).attr("id");
						var stringRowJQueryID = stringKres + stringRowJavaScriptID;
						var stringCellJavaScriptID = stringCellPrefix + stringInfix + "SPAJProposal" + arraySPAJProposalTableHeader[j];
						var stringCellJQueryID = stringKres + stringCellJavaScriptID + indexRow;
						var stringCellSuffix = stringCellJavaScriptID;
						
						if (stringIDWithoutInfix == arraySPAJProposalTableHeader[j])
						{
							if ($(stringCellJQueryID).text() == "" || $(stringCellJQueryID).text() == undefined || $(stringCellJQueryID).text() == null)
							{
								$(stringCellJQueryID).append(stringValue);

								// FOR NUMBER

								numberGenerator(stringInfix + "SPAJProposal", indexRow);

								return false;
							}
							else
							{

							}
						}
						else
						{

						}
					});
				}
				
				setTextPDF(stringKey, stringValue);        
			}
			else
			{
				setTextForm(stringKey, stringValue);
			}
        }
        else if (stringKey.substring(0, stringPrefixRadioButton.length) == stringPrefixRadioButton)
        {
			// BENEFICIARIES LIST
				
			var stringIDWithoutPrefix = stringKey.substring(stringPrefixRadioButton.length, stringKey.length);
			var stringIndicatorPrefix = stringIDWithoutPrefix.substring(0, 3);

			if (stringIndicatorPrefix == "Ben")
			{
				var stringIDWithoutInfix = stringIDWithoutPrefix.substring(stringBeneficiariesListInfix.length, stringIDWithoutPrefix.length - 1);
				var stringTableJQueryID = stringKres + stringTablePrefix + stringBeneficiariesListInfix;

				for (var j = 0; j < arrayBeneficiariesListTableHeader.length; j++)
				{
					$(stringTableJQueryID + " tbody tr").each(function(indexRow)
					{
						var stringRowJavaScriptID = $(this).attr("id");
						var stringRowJQueryID = stringKres + stringRowJavaScriptID;
						var stringCellJavaScriptID = stringCellPrefix + stringBeneficiariesListInfix + arrayBeneficiariesListTableHeader[j];
						var stringCellJQueryID = stringKres + stringCellJavaScriptID + indexRow;
						var stringCellSuffix = stringCellJavaScriptID;

						if (stringIDWithoutInfix == arrayBeneficiariesListTableHeader[j])
						{
							if ($(stringCellJQueryID).text() == "" || $(stringCellJQueryID).text() == undefined || $(stringCellJQueryID).text() == null)
							{
								$(stringCellJQueryID).append(stringValue);
								return false;
							}
							else
							{

							}
						}
						else
						{

						}
					});
				}
			}
			else
			{

			}
			
            setRadioButtonGeneral(stringKey, stringValue);
        }
        else if (stringKey.substring(0, stringPrefixCheckbox.length) == stringPrefixCheckbox)
        {            
            setRadioCheckboxGeneral(stringKey, stringValue);
        }
        else if (stringKey.substring(0, stringPrefixSelect.length) == stringPrefixSelect)
        {            
            if (stringPageType == stringPageTypePDF)
            {
				// BENEFICIARIES LIST
				
				var stringIDWithoutPrefix = stringKey.substring(stringPrefixSelect.length, stringKey.length);
				var stringIndicatorPrefix = stringIDWithoutPrefix.substring(0, 3);
				
				if (stringIndicatorPrefix == "Ben")
				{
					var stringIDWithoutInfix = stringIDWithoutPrefix.substring(stringBeneficiariesListInfix.length, stringIDWithoutPrefix.length - 1);
					var stringTableJQueryID = stringKres + stringTablePrefix + stringBeneficiariesListInfix;
					
					for (var j = 0; j < arrayBeneficiariesListTableHeader.length; j++)
					{
						$(stringTableJQueryID + " tbody tr").each(function(indexRow)
						{
							var stringRowJavaScriptID = $(this).attr("id");
							var stringRowJQueryID = stringKres + stringRowJavaScriptID;
							var stringCellJavaScriptID = stringCellPrefix + stringBeneficiariesListInfix + arrayBeneficiariesListTableHeader[j];
							var stringCellJQueryID = stringKres + stringCellJavaScriptID + indexRow;
							var stringCellSuffix = stringCellJavaScriptID;
							
							if (stringIDWithoutInfix == arrayBeneficiariesListTableHeader[j])
							{
								if ($(stringCellJQueryID).text() == "" || $(stringCellJQueryID).text() == undefined || $(stringCellJQueryID).text() == null)
								{
									$(stringCellJQueryID).append(stringValue);
									return false;
								}
								else
								{

								}
							}
							else
							{

							}
						});
					}
				}
				else
				{
				
				}
				
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
				// BENEFICIARIES LIST
				
				var stringIDWithoutPrefix = stringKey.substring(stringPrefixDate.length, stringKey.length);
				var stringIndicatorPrefix = stringIDWithoutPrefix.substring(0, 3);
				
				if (stringIndicatorPrefix == "Ben")
				{
					var stringIDWithoutInfix = stringIDWithoutPrefix.substring(stringBeneficiariesListInfix.length, stringIDWithoutPrefix.length - 1);
					var stringTableJQueryID = stringKres + stringTablePrefix + stringBeneficiariesListInfix;
						
					if (stringIDWithoutInfix == "Birthday")
					{
						$(stringTableJQueryID + " tbody tr").each(function(indexRow)
						{
							var stringRowJavaScriptID = $(this).attr("id");
							var stringRowJQueryID = stringKres + stringRowJavaScriptID;
							var arrayBirthdayTableHeader = [stringIDDay, stringIDMonth, stringIDYear];

							for (var k = 0; k < arrayBirthdayTableHeader.length; k++)
							{
								var stringCellJavaScriptID = stringCellPrefix + stringBeneficiariesListInfix + arrayBirthdayTableHeader[k];
								var stringCellJQueryID = stringKres + stringCellJavaScriptID + indexRow;
								var arrayDate = stringValue.split(stringSeparatorDate);
								
								if ($(stringCellJQueryID).text() == "" || $(stringCellJQueryID).text() == undefined || $(stringCellJQueryID).text() == null)
								{
									$(stringCellJQueryID).append(arrayDate[k]);
									
									if (k == arrayBirthdayTableHeader.length - 1)
									{
										return false;
									}
									else
									{
										
									}
								}
								else
								{

								}
							}
						});
					}
					else
					{

					}
				}
				else
				{
				
				}
				
				// FOR TABLE SPAJ PROPOSAL
				
				var stringInfix;
				
				if (stringIndicatorPrefix == stringIndicatorPolicyHolder)
				{
					stringTableJQueryID = stringKres + "TablePolicyHolderSPAJProposal";
					stringInfix = stringPolicyHolderPrefix;
				}
				else
				{
					stringTableJQueryID = stringKres + "TableProspectiveInsuredSPAJProposal";
					stringInfix = stringProspectiveInsuredPrefix;
				}
				
				var stringIDWithoutInfix = stringIDWithoutPrefix.substring(stringInfix.length + "SPAJProposal".length, stringIDWithoutPrefix.length - 1);
				
				for (var j = 0; j < arraySPAJProposalTableHeader.length; j++)
				{
					$(stringTableJQueryID + " tbody tr").each(function(indexRow)
					{
						var stringRowJavaScriptID = $(this).attr("id");
						var stringRowJQueryID = stringKres + stringRowJavaScriptID;
						var stringCellJavaScriptID = stringCellPrefix + stringInfix + "SPAJProposal" + arraySPAJProposalTableHeader[j];
						var stringCellJQueryID = stringKres + stringCellJavaScriptID + indexRow;
						var stringCellSuffix = stringCellJavaScriptID;
						
						if (stringIDWithoutInfix == arraySPAJProposalTableHeader[j])
						{
							if ($(stringCellJQueryID).text() == "" || $(stringCellJQueryID).text() == undefined || $(stringCellJQueryID).text() == null)
							{
								$(stringCellJQueryID).append(stringValue);

								// FOR NUMBER

								numberGenerator(stringInfix + "SPAJProposal", indexRow);

								return false;
							}
							else
							{

							}
						}
						else
						{

						}
					});
				}
				
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
	
	
	// SET TABLE AND ARRAY
	
	if (stringPageType == stringPageTypePDF)
	{

	}
	else
	{
		// FOR BENEFICIARIES LIST
		
		if (stringPageSectionCurrent == stringPageSectionBeneficiariesList)
		{
			arrayBeneficiariesList = objectContent;
			tableBeneficiariesListGenerator("TableBeneficiariesList", arrayBeneficiariesList);

			for (var j = 0; j < arrayBeneficiariesList.length; j++)
			{
				var stringIndicatorShare = arrayBeneficiariesList[j].elementID.substring(arrayBeneficiariesList[j].elementID.length - 5, arrayBeneficiariesList[j].elementID.length);
				
				if (stringIndicatorShare == "ntage")
				{
					intSharePercentage = parseInt(arrayBeneficiariesList[j].Value, 10);
				}
				else
				{

				}
			}
			
			setTextForm(stringPrefixText + stringBeneficiariesListInfix + stringSharePercentageSuffix, intSharePercentage);				
		}
		else if (stringPageSectionCurrent == stringPageSectionHealthQuestionnaire)
		{
			arrayHealthQuestionnaire = objectContent;
			
			if (arrayHealthQuestionnaire.length > 0)
			{
				var stringNameInfix;
				var stringRadioButtonValue;
				
				if (stringPageInfixTypeCurrent == stringPolicyHolderPrefix)
				{
					stringNameInfix = stringPolicyHolderPrefix + "SPAJProposal";
					stringRadioButtonValue = arrayFind(arrayHealthQuestionnaire, stringPrefixRadioButton + stringNameInfix)
					
					if (stringRadioButtonValue == true || stringRadioButtonValue == "true")
					{
						tableSPAJProposalGenerator(stringNameInfix, "SPAJProposalList", arrayHealthQuestionnaire);
						$("#ButtonAddSPAJProposal").css("display", "block");
					}
					else
					{

					}
				}
				else
				{
					stringNameInfix = stringPolicyHolderPrefix + "SPAJProposal";
					stringRadioButtonValue = arrayFind(arrayHealthQuestionnaire, stringPrefixRadioButton + stringNameInfix)
					
					if (stringRadioButtonValue == true || stringRadioButtonValue == "true")
					{
						tableSPAJProposalGenerator(stringProspectiveInsuredPrefix + "SPAJProposal", "SPAJProposalList", arrayHealthQuestionnaire);
						$("#ButtonAddSPAJProposal").css("display", "block");
					}
					else
					{

					}
				}

				var stringButtonPreviewJavaScriptID;
				var stringButtonPreviewJQueryID;
				var stringButtonPreviewName;
				var stringRadioButtonNameWithoutPrefix;
				var stringTextJavaScriptID;
				var stringValue;

				$(".ButtonPreview").each(function()
				{
					stringButtonPreviewJavaScriptID = $(this).attr("id");
					stringButtonPreviewJQueryID = stringKres + stringButtonPreviewJavaScriptID;
					stringButtonPreviewName = $(this).attr("name");
					stringValue = arrayFind(arrayHealthQuestionnaire, stringButtonPreviewName);

					if (stringValue == null || stringValue == undefined || stringValue == "false" || stringValue == false)
					{

					}
					else
					{
						$(stringButtonPreviewJQueryID).css("display", "block");
					}
				});
				
				
			}
			else
			{

			}
		}
		else
		{
			
		}
	}
}


// SET TO DATABASE

function setToDatabase(stringPageType)
{
    var objectContent = [];
    
    $("input[type=text]").each(function()
    {
        var stringKey = $(this).attr("id");
        var stringValue;
        
        if (stringPageType == stringPageTypePDF)
        {
            stringValue = getTextPDF(stringKey);
        }
        else
        {
            stringValue = getTextForm(stringKey);
        }

        validatePush(objectContent, stringKey, stringValue);
    });
    
//    $("input[type=checkbox]").each(function()
//    {
//        stringValue = setCheckboxGeneral(stringKey);
//            
//        validatePush(objectContent, stringKey, stringValue);
//    });
    
    $("input[type=date]").each(function()
    {
        var stringKey = $(this).attr("id");
        var stringValue;
        
        if (stringPageType == stringPageTypePDF)
        {
            stringValue = getDatePDF(stringKey);
        }
        else
        {
            stringValue = getDateForm(stringKey);
        }

        validatePush(objectContent, stringKey, stringValue);
    });
    
    $("input[type=radio]").each(function()
    {
        var stringKey = $(this).attr("name");
        var stringValue;
        var booleanDuplicate = false;
        
        for (var i = 0; i < objectContent.length; i++)
        {
            if (objectContent[i].elementID == stringKey)
            {
                booleanDuplicate = true;
                i = objectContent.length;
            }
            else
            {
                booleanDuplicate = false;
            }
        }
        
        if (booleanDuplicate == true)
        {
            
        }
        else
        {
            stringValue = getRadioButtonGeneral(stringKey);

            validatePush(objectContent, stringKey, stringValue);
        }
    });
    
    $("select").each(function()
    {
        var stringKey = $(this).attr("id");
        var stringValue;
        
        if (stringPageType == stringPageTypePDF)
        {
            stringValue = getSelectPDF(stringKey);
        }
        else
        {
            stringValue = getSelectForm(stringKey);
        }
        
        validatePush(objectContent, stringKey, stringValue);
    });
    
    $("textarea").each(function()
    {
        var stringKey = $(this).attr("id");
        var stringValue;
        
        if (stringPageType == stringPageTypePDF)
        {
            stringValue = getAreaPDF(stringKey);
        }
        else
        {
            stringValue = getAreaForm(stringKey);
        }
        
        validatePush(objectContent, stringKey, stringValue);
    });
    
    return objectContent;
}

function JSONGenerator(objectContent) 
{
    var callInfo = {};
    callInfo.data = {};
    callInfo.data.SPAJAnswers = [];

    for (var i = 0; i < objectContent.length; i++)
    {
        callInfo.data.SPAJAnswers.push({ elementID : objectContent[i].elementID, Value : objectContent[i].Value, SPAJID : "1", CustomerID : "1" });
    }

    console.log(JSON.stringify(callInfo));
    
    return callInfo;
}


// MONITORING

function radioButtonMonitoring(radioButtonName)
{
    $("input:radio[name=" + radioButtonName + "]").change(function()
    {
        var stringValue;
        
        if ($(this).is(":checked"))
        {
            stringValue = $(this).val();
        }
        else
        {
            
        }
        
        return stringValue;
    });
}

function calculateAge(stringBirthdayID, stringAgeID)
{
    var stringBirthdayJQueryID = stringKres + stringBirthdayID;
    var stringAgeJQueryID = stringKres + stringAgeID;
    
    $(stringBirthdayJQueryID).change(function()
    {
        
        if ($(stringBirthdayJQueryID).val().length > 0)
        {
            var arrayBirthday = $(stringBirthdayJQueryID).val().split('/');
            var dateBirthday = new Date(arrayBirthday[2], arrayBirthday[1], arrayBirthday[0]);
            var dateToday = new Date();
			/* alert(dateToday.getTime() + " - " + dateBirthday.getTime() + " = " + Math.ceil(dateToday.getTime() - dateBirthday.getTime()));
            var dateDifference = Math.ceil(dateToday.getTime() - dateBirthday.getTime()) / (1000 * 60 * 60 * 24 * 365);
            var intAge = parseInt(dateDifference); */
			
			var intAge = dateToday.getFullYear() - dateBirthday.getFullYear();
			var m = dateToday.getMonth() - dateBirthday.getMonth();
			if (m < 0 || (m === 0 && dateToday.getDate() < dateBirthday.getDate())) 
			{
				intAge--;
			}
			else
			{
				
			}
			
            if (intAge == null || intAge == undefined)
            {
                $(stringAgeJQueryID).val("");
            }
            else
            {
                $(stringAgeJQueryID).val(intAge);
            }
        }
        else
        {

        }
    });
}

function autoPopulateState()
{
   var stringJQueryID;

   $("input[data-input-type='" + stringInputTypeAutoPopulate +
"']").each(function()
   {
       stringJQueryID = stringKres +$(this).attr("id");

       $(stringJQueryID).prop("readonly", true);
   });
}

function radioButtonOtherGenerator(stringRadioButtonName, stringTextID,
stringValue)
{
   $(stringTextID).prop("readonly", true);

   $("input:radio[name='" + stringRadioButtonName + "']").change(function()
   {
       if (getRadioButtonGeneral(stringRadioButtonName) == stringValue)
       {
           $(stringTextID).prop("readonly", false);
       }
       else
       {
           $(stringTextID).prop("readonly", true);
           $(stringTextID).val('');
       }
   });
}


// MULTI POP UP

function buttonPopUpNavigation(stringPopUpCurrentJavaScriptID, stringButtonJavaScriptID, stringPopUpLinkJavaScriptID)
{
	var stringButtonJQueryID = stringKres + stringButtonJavaScriptID;
	var stringPopUpCurrentJQueryID = stringKres + stringPopUpCurrentJavaScriptID;
	var stringPopUpLinkJQueryID = stringKres + stringPopUpLinkJavaScriptID;
	
	$(stringPopUpCurrentJQueryID).css("display", "none");
	$(stringPopUpLinkJQueryID).css("display", "block");
}

function buttonPopUpDone(stringPopUpCurrentJavaScriptID, stringParentNameWithoutPrefix, arrayContent)
{
	var stringPopUpCurrentJQueryID = stringKres + stringPopUpCurrentJavaScriptID;
	var booleanState = getInputFrom(stringPopUpCurrentJavaScriptID, stringParentNameWithoutPrefix, arrayContent);
	$(stringPopUpCurrentJQueryID).css("display", "none");
	
	/* if (booleanState == true)
	{
		$(stringPopUpCurrentJQueryID).css("display", "none");
		previewArrayObject(arrayContent);
	}
	else
	{
		
	} */
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
	$(stringPopUpCurrentJQueryID).css("display", "none");
	$(stringPopUpParentJQueryID).css("display", "block");
	/* var booleanState = getInputFrom(stringPopUpCurrentJavaScriptID, stringParentNameWithoutPrefix, arrayContent);
	
	if (booleanState == true)
	{
		$(stringPopUpCurrentJQueryID).css("display", "none");
		$(stringPopUpParentJQueryID).css("display", "none");
		previewArrayObject(arrayContent);
	}
	else
	{
		
	} */
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

function getInputFrom(stringLayoutJavaScriptID, arrayContent, booleanState, stringInputInfix)
{
	var stringPopUpJQueryID = stringKres + stringLayoutJavaScriptID;
	var arrayInputTemporary = [];
	stateValidation = true;
	
	// TEXT
	
	if (stateValidation == true)
	{
		$(stringPopUpJQueryID + " form input:text").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix(stringInputJavaScriptID);
			var stringKey = stringPrefixText + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getTextGeneral(stringInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayAdd(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayAdd(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// RADIO BUTTON
	
	if (stateValidation == true)
	{
		var stringFlag = 0;
		
		$(stringPopUpJQueryID + " form input:radio").each(function()
		{
			var stringInputName = $(this).attr("name");
			var stringInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix(stringInputJavaScriptID);
			var stringKey = stringPrefixRadioButton + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getRadioButtonGeneral(stringInputName);

			if (stringFlag != stringInputName)
			{
				if (stringInputRequired == stringStateRequired)
				{
					if (validateRadioButtonGeneral(stringInputJQueryID) == false)
					{
						validationMessage("Harap lengkapi form terlebih dahulu !.", null);
						return false;
					}
					else
					{
						arrayAdd(arrayInputTemporary, stringKey, stringValue);
						stringFlag = stringInputName;
					}
				}
				else
				{
					arrayAdd(arrayInputTemporary, stringKey, stringValue);
					stringFlag = stringInputName;
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
		$(stringPopUpJQueryID + " form select").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var booleanInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix(stringInputJavaScriptID);
			var stringKey = stringPrefixSelect + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getSelectForm(stringInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateSelectGeneral(stringInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayAdd(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayAdd(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// DATE
	
	if (stateValidation == true)
	{
		$(stringPopUpJQueryID + " form input[type='date']").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix(stringInputJavaScriptID);
			var stringKey = stringPrefixDate + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getDateForm(stringInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayAdd(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayAdd(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// EMAIL
	
	if (stateValidation == true)
	{
		$(stringPopUpJQueryID + " form input[type='email']").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix(stringInputJavaScriptID);
			var stringKey = stringPrefixEmail + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getEmailForm(stringInputJavaScriptID);

			if (stringInputRequired == true)
			{
				if (validateTextGeneral(stringInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayAdd(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayAdd(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// NUMBER
	
	if (stateValidation == true)
	{
		$(stringPopUpJQueryID + " form input[type='number']").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix(stringInputJavaScriptID);
			var stringKey = stringPrefixText + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getNumberForm(stringInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayAdd(arrayInputTemporary, stringKey, stringValue);
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
	
	// CHECKBOX
	
	if (stateValidation == true)
	{
		$(stringPopUpJQueryID + " form input:checkbox").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputJQueryID = stringKres + stringInputJavaScriptID;
			var stringInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix(stringInputJavaScriptID);
			var stringKey = stringPrefixText + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getCheckboxGeneral(stringInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayAdd(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayAdd(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	// TEXT AREA
	
	if (stateValidation == true)
	{
		$(stringPopUpJQueryID + " form textarea").each(function()
		{
			var stringInputJavaScriptID = $(this).attr("id");
			var stringInputRequired = $(this).attr("required");
			var stringInputNameWithoutPrefix = releasePrefix(stringInputJavaScriptID);
			var stringKey = stringPrefixArea + stringInputInfix + stringInputNameWithoutPrefix;
			var stringValue = getAreaForm(stringInputJavaScriptID);

			if (stringInputRequired == stringStateRequired)
			{
				if (validateTextGeneral(stringInputJQueryID) == false)
				{
					validationMessage("Harap lengkapi form terlebih dahulu !.", null);
					return false;
				}
				else
				{
					arrayAdd(arrayInputTemporary, stringKey, stringValue);
				}
			}
			else
			{
				arrayAdd(arrayInputTemporary, stringKey, stringValue);
			}
		});
	}
	else
	{
		
	}
	
	if (stateValidation == true)
	{
		for (var i = 0; i < arrayInputTemporary.length; i++)
		{
			arrayAdd(arrayContent, arrayInputTemporary[i].elementID, arrayInputTemporary[i].Value);
		}
		
		return true;
	}
	else
	{
		return false;
	}
}

function setInputFrom(stringLayoutJavaScriptID, arrayContent, booleanState)
{
	
}