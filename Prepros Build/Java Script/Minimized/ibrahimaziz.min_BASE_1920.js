function labelGenerator(t,e){$(t).css("width",(sizeBox+4)*e-10-e+"px")}function spanGenerator(t,e){$(t).css("width",(sizeBox+4)*e-10-e+"px")}function boxGenerator(t,e,n,i){$(t).append("<tbody></tbody>"),$(t+" tbody").append("<tr></tr>");for(var a=t.substring(1,t.length),o=0;e>o;o++)$(t+" tbody tr").append("<td id="+a+o+"></td>");n==boxTypeWithBottomLabel&&$(t).append("<tfoot><tr><td class='' colspan="+e+">"+i+"</td></tr></tfoot>")}function lineGenerator(t,e){$(t).css("width",sizeBox*e+2+"px")}function additionalQuestionGenerator(t){$("input:radio[name="+t+"]").change(function(){"true"==$(this).val()?($("#PopUpAdditionalQuestion").css("display","block"),$("#LabelAdditionalQuestion").append($("#Label"+t).text()),$("#TextAdditionalQuestion").empty()):($("#PopUpAdditionalQuestion").css("display","none"),$("#LabelAdditionalQuestion").empty()),stringKey=t})}function buttonAdditionalQuestionGenerator(t,e){$("#ButtonAdditionalQuestionCancel").click(function(){$(t).css("display","none")}),$("#ButtonAdditionalQuestionDone").click(function(){var n=!0,i=stringKey+stringAdditionalQuestionSuffix,a=$(e).val();if(1==validateTextGeneral(e)){if(arrayAdditionalQuestion.length>0){for(var o=0;o<arrayAdditionalQuestion.length;o++)arrayAdditionalQuestion[o].key==i&&(arrayAdditionalQuestion[o].value=a,n=!1);1==n&&arrayAdditionalQuestion.push({key:i,value:a})}else arrayAdditionalQuestion.push({key:i,value:a});$(t).css("display","none"),$(e).empty();for(var r="",o=0;o<arrayAdditionalQuestion.length;o++)r+="key : "+arrayAdditionalQuestion[o].key+"\nvalue : "+arrayAdditionalQuestion[o].value+"\n";alert(r)}else validationMessage("Harap lengkapi form terlebih dahulu !.",null)})}function inputSetter(t,e){suffixGetter(t)==stringRadioButtonSuffix?radioButtonSetter(t.substring(t.length-stringRadioButtonSuffix.length,t.length),e):suffixGetter(e)==stringRadioButtonSuffix?checkboxSetter(t.substring(t.length-stringRadioButtonSuffix.length,t.length),e):$("#"+t).val(e)}function validateState(t){1==t?1==stateValidation&&(stateValidation=!0):1==stateValidation&&(stateValidation=!1)}function validationMessage(t,e){0==stateValidation?(alert(t),stateValidation=!0):null==t||alert(e)}function validateTextGeneral(t){return $(t).val().length>0?(validateState(!0),!0):(validateState(!1),!1)}function validateRadioButtonGeneral(t){return void 0!=$("input:radio[name="+t+"]:checked").val()?(validateState(!0),!0):(validateState(!1),!1)}function setBoxGeneral(t){for(var e=stringKres+t,n=0;n<stringContent.length;n++)$(e+" tbody tr "+e+n).append(stringContent[n])}function setTextGeneral(t,e){var n=stringKres+t;$(n).val(e)}function setRadioButtonGeneral(t,e){var n=$("input:radio[name="+t+"]");0==n.is(":checked")&&n.filter("[value="+e+"]").prop("checked",!0)}function setSelectForm(t,e){stringTextGeneral(t,e)}function setSelectPDF(t,e){setterBoxGeneral(t,e)}function setCheckboxGeneral(t,e){var n=$("input:checkbox[name="+t+"]");0==n.is(":checked")&&n.filter("[value="+e+"]").prop("checked",!0)}function setTextForm(t,e){stringTextGeneral(t,e)}function boxSetter(t,e){if(e.indexOf(separatorTelephone)>0)for(var n=e.split(separatorTelephone),i=[boxIDPrefix,boxIDInfix],a=0;a<n.length;a++)setBoxGeneral(stringID+i[a],n[a]);else{var o=stringKres+stringIDLine+stringID;0==$(o).length?stringTextGeneral(stringID,stringValue):setBoxGeneral(stringID,stringValue)}}function setDateForm(){stringTextGeneral(stringID,stringValue)}function setDatePDF(t,e){for(var n=[boxIDDay,boxIDMonth,boxIDYear],i=e.split(separatorDate),a=0;a<i.length;a++)setBoxGeneral(t+n[a],i[a])}function getBoxGeneral(t){var e=stringKres+t,n="";return $(e+" tbody tr "+e+i).each(function(){var t=$(this).text();t.length>0&&(n+=t)}),n}function getTextGeneral(t){var e=stringKres+t;return $(e).val()}function radioButtonGetter(t){var e=$("input:radio[name="+t+"]:checked").val(),n=t+stringRadioButtonSuffix;if(0==validateRadioButtonGeneral(t));else{var i=!0;if(arrayAdditionalQuestion.length>0){for(var a=0;a<arrayAdditionalQuestion.length;a++)arrayAdditionalQuestion[a].key==n&&(arrayAdditionalQuestion[a].value=e,i=!1);1==i&&arrayAdditionalQuestion.push({key:n,value:e})}else arrayAdditionalQuestion.push({key:n,value:e})}return e}function textGetter(t){var e=$(t).val(),n=t.substring(1,t.length);if(0==validateTextGeneral(t));else{var i=!0;if(arrayAdditionalQuestion.length>0){for(var a=0;a<arrayAdditionalQuestion.length;a++)arrayAdditionalQuestion[a].key==n&&(arrayAdditionalQuestion[a].value=e,i=!1);1==i&&arrayAdditionalQuestion.push({key:n,value:e})}else arrayAdditionalQuestion.push({key:n,value:e})}return e}function suffixGetter(t){return t.substring(t.length-stringRadioButtonSuffix.length,t.length)==stringRadioButtonSuffix?stringRadioButtonSuffix:t.substring(t.length-stringCheckboxSuffix,t.length)==stringCheckboxSuffix?stringCheckboxSuffix:stringTextSuffix}function radioButtonMonitoring(t){$("input:radio[name="+t+"]").change(function(){var t;return $(this).is(":checked")&&(t=$(this).val()),t})}var directoryRoot="..",boxTypeWithBottomLabel="With bottom label",boxTypeWithoutLabel="Without label",labelDay="Hari",labelMonth="Bulan",labelYear="Tahun",sizeBox=20,arrayAdditionalQuestion=[],stringKey,stringRadioButtonSuffix="RadioButton",stringAdditionalQuestionSuffix="AdditionalQuestion",stringCheckboxSuffix="Checkbox",boxTypeStraight="Text",boxTypeDate="Date",boxTypeTelephone="Telephone",boxIDDay="DateDay",boxIDMonth="DateMonth",boxIDYear="DateYear",boxIDPrefix="Prefix",boxIDInfix="Infix",boxIDSuffix="Suffix",boxIDBox="#Box",separatorDate="-",separatorTelephone="-",stateValidation=!0;
