// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.biz
// built for InfoConnect Sdn Bhd - BCA Life Bless
// http://www.infoconnect.com.my


// INITIALIZATION

var directoryRoot = "..";
var boxTypeWithBottomLabel = "With bottom label";
var boxTypeWithoutLabel = "Without label";
var labelDay = "Hari";
var labelMonth = "Bulan";
var labelYear = "Tahun";
var sizeBox = 20;
var arrayAdditionalQuestion = [];
var stringKey;
var stringRadioButtonSuffix = "RadioButton";
var stringAdditionalQuestionSuffix = "AdditionalQuestion";
var stringCheckboxSuffix = "Checkbox";
var boxTypeStraight = "Text";
var boxTypeDate = "Date";
var boxTypeTelephone = "Telephone";
var boxIDDay = "DateDay";
var boxIDMonth = "DateMonth";
var boxIDYear = "DateYear";
var boxIDPrefix = "Prefix";
var boxIDInfix = "Infix";
var boxIDSuffix = "Suffix";
var boxIDBox = "#Box";
var separatorDate = "-";
var separatorTelephone = "-";
var stateValidation = true;


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
    else
    {

    }
}

function lineGenerator(lineID, lineAmount)
{
    $(lineID).css("width", ((sizeBox * lineAmount) + 2) + "px");
}

function additionalQuestionGenerator(radioButtonName)
{
    $("input:radio[name=" + radioButtonName + "]").change(function()
    {
        if($(this).val() == "true")
        {
            $("#PopUpAdditionalQuestion").css("display", "block");
            $("#LabelAdditionalQuestion").append($("#Label" + radioButtonName).text());
            $("#TextAdditionalQuestion").empty();
        }
        else
        {
            $("#PopUpAdditionalQuestion").css("display", "none");
            $("#LabelAdditionalQuestion").empty();
        }
        
        stringKey = radioButtonName;
    });
}

function buttonAdditionalQuestionGenerator(popUpID, textID)
{
    $("#ButtonAdditionalQuestionCancel").click(function()
    {
        $(popUpID).css("display", "none");
    });

    $("#ButtonAdditionalQuestionDone").click(function()
    {
        var booleanPushState = true;
        var stringTextKey = stringKey + stringAdditionalQuestionSuffix;
        var stringTextValue = $(textID).val();

        if (validateTextGeneral(textID) == true)
        {
            if (arrayAdditionalQuestion.length > 0)
            {
                for (var i = 0; i < arrayAdditionalQuestion.length; i++)
                {
                    if (arrayAdditionalQuestion[i].key == stringTextKey)
                    {
                        arrayAdditionalQuestion[i].value = stringTextValue;
                        booleanPushState = false;
                    }
                    else
                    {

                    }
                }

                if (booleanPushState == true)
                {
                    arrayAdditionalQuestion.push({ key: stringTextKey, value: stringTextValue });
                }
                else
                {

                }
            }
            else
            {
                arrayAdditionalQuestion.push({ key: stringTextKey, value: stringTextValue });
            }

            $(popUpID).css("display", "none");
            $(textID).empty();

            var stringObjectPreview = "";

            for (var i = 0; i < arrayAdditionalQuestion.length; i++)
            {
                stringObjectPreview += "key : " + arrayAdditionalQuestion[i].key + "\nvalue : " + arrayAdditionalQuestion[i].value + "\n";
            }

            alert(stringObjectPreview);
        }
        else
        {
            validationMessage("Harap lengkapi form terlebih dahulu !.", null);
        }
    });
}

function inputSetter(stringKey, stringValue)
{
    if (suffixGetter(stringKey) == stringRadioButtonSuffix)
    {
        radioButtonSetter(stringKey.substring(stringKey.length - stringRadioButtonSuffix.length, stringKey.length), stringValue);
    }
    else if (suffixGetter(stringValue) == stringRadioButtonSuffix)
    {
        checkboxSetter(stringKey.substring(stringKey.length - stringRadioButtonSuffix.length, stringKey.length), stringValue)
    }
    else
    {
        $("#" + stringKey).val(stringValue);
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
        if (stateValidation == true)
        {
            stateValidation = false;
        }
        else
        {

        }
    }
}

function validationMessage(stringMessageNegative, stringMessagePositive)
{
    if (stateValidation == false)
    {
        alert(stringMessageNegative);
        stateValidation = true;
    }
    else
    {
        if (stringMessageNegative == null)
        {

        }
        else
        {
            alert(stringMessagePositive)
        }
    }
}

function validateTextGeneral(textID)
{
    if ($(textID).val().length > 0)
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

function validateRadioButtonGeneral(radioButtonName)
{
    if ($("input:radio[name=" + radioButtonName + "]:checked").val() != undefined)
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


// SETTER

function boxSetter(tableID, stringContent, stringType)
{
    var stringID = boxIDBox + tableID;
    
    function boxPlacer(tableID, stringContent)
    {
        for (var i = 0; i < stringContent.length; i++)
        {
            $(tableID + " tbody tr " + tableID + i).append(stringContent[i]);
        }
    }
    
    if (stringType == boxTypeStraight)
    {
        boxPlacer(stringID, stringContent);
    }
    else if (stringType == boxTypeDate)
    {
        var arrayDateID = [boxIDDay, boxIDMonth, boxIDYear];
        var arrayDateString = stringContent.split(separatorDate);
        
        for (var i = 0; i < arrayDateString.length; i++)
        {
            boxPlacer(stringID + arrayDateID[i], arrayDateString[i]);
        }
    }
    else
    {
        var arrayTelephoneString = stringContent.split(separatorTelephone);
        var arrayTelephoneID = [boxIDPrefix, boxIDInfix];
        
        for(var i = 0; i < arrayTelephoneString.length; i++)
        {
            boxPlacer(stringID + arrayTelephoneID[i], arrayTelephoneString[i]);
        } 
    }
}

function radioButtonSetter(radioButtonName, stringValue)
{
    var radioButton = $("input:radio[name=" + radioButtonName + "]");
    
    if (radioButton.is(":checked") == false) 
    {
        radioButton.filter("[value=" + stringValue + "]").prop("checked", true);
    }
    else
    {
        
    }
}


// GETTER

function boxGetter(tableID, boxAmount)
{
    var stringContent = "";
    
    for (var i = 0; i < boxAmount; i++)
    {
        stringContent += $(tableID + " tbody tr " + tableID + i).text();
    }
    
    return stringContent;
}

function radioButtonGetter(radioButtonName)
{
    var stringRadioButtonValue = $("input:radio[name=" + radioButtonName + "]:checked").val();
    var stringRadioButtonKey = radioButtonName + stringRadioButtonSuffix;
    
    if (validateRadioButtonGeneral(radioButtonName) == false)
    {
        // alert("Harap pilih radio button di bawah ini !.");
    }
    else
    {
        var booleanPushState = true;
        
        if (arrayAdditionalQuestion.length > 0)
        {
            for (var i = 0; i < arrayAdditionalQuestion.length; i++)
            {
                if (arrayAdditionalQuestion[i].key == stringRadioButtonKey)
                {
                    arrayAdditionalQuestion[i].value = stringRadioButtonValue;
                    booleanPushState = false;
                }
                else
                {

                }
            }

            if (booleanPushState == true)
            {
                arrayAdditionalQuestion.push({ key: stringRadioButtonKey, value: stringRadioButtonValue});
            }
            else
            {

            }
        }
        else
        {
            arrayAdditionalQuestion.push({ key: stringRadioButtonKey, value: stringRadioButtonValue});
        }
    }
    
    return stringRadioButtonValue;
}

function textGetter(textID)
{
    var stringTextValue = $(textID).val();
    var stringTextKey = textID.substring(1, textID.length);
    
    if (validateTextGeneral(textID) == false)
    {
        // alert("Harap isi kolom di bawah ini !.");
    }
    else
    {
        var booleanPushState = true;
         
        if (arrayAdditionalQuestion.length > 0)
        {
            for (var i = 0; i < arrayAdditionalQuestion.length; i++)
            {
                if (arrayAdditionalQuestion[i].key == stringTextKey)
                {
                    arrayAdditionalQuestion[i].value = stringTextValue;
                    booleanPushState = false;
                }
                else
                {
                    
                }
            }

            if (booleanPushState == true)
            {
                arrayAdditionalQuestion.push({ key: stringTextKey, value: stringTextValue});
            }
            else
            {

            }
        }
        else
        {
            arrayAdditionalQuestion.push({ key: stringTextKey, value: stringTextValue});
        }
    }
    
    return stringTextValue;
}
    
function suffixGetter(stringKey)
{
    if (stringKey.substring(stringKey.length - stringRadioButtonSuffix.length, stringKey.length) == stringRadioButtonSuffix)
    {
        return stringRadioButtonSuffix;
    }
    else if (stringKey.substring(stringKey.length - stringCheckboxSuffix, stringKey.length) == stringCheckboxSuffix)
    {
        return stringCheckboxSuffix;
    }
    else
    {
        return stringTextSuffix;
    }
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