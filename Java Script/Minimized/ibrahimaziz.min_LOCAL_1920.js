function labelGenerator(e,t){$(e).css("width",(sizeBox+4)*t-10-t+"px")}function spanGenerator(e,t){$(e).css("width",(sizeBox+4)*t-10-t+"px")}function boxGenerator(e,t,n,a){$(e).append("<tbody></tbody>"),$(e+" tbody").append("<tr></tr>");for(var i=e.substring(1,e.length),r=0;t>r;r++)$(e+" tbody tr").append("<td id="+i+r+"></td>");n==boxTypeWithBottomLabel&&$(e).append("<tfoot><tr><td class='' colspan="+t+">"+a+"</td></tr></tfoot>")}function lineGenerator(e,t){$(e).css("width",sizeBox*t+2+"px")}function additionalQuestionGenerator(e){$("input:radio[name="+e+"]").change(function(){"true"==$(this).val()?($("#PopUpAdditionalQuestion").css("display","block"),$("#LabelAdditionalQuestion").append($("#Label"+e).text()),$("#TextAdditionalQuestion").empty()):($("#PopUpAdditionalQuestion").css("display","none"),$("#LabelAdditionalQuestion").empty()),stringKey=e})}function buttonAdditionalQuestionGenerator(e,t){$("#ButtonAdditionalQuestionCancel").click(function(){$(e).css("display","none")}),$("#ButtonAdditionalQuestionDone").click(function(){var n=!0,a=stringKey+stringAdditionalQuestionSuffix,i=$(t).val();if(1==validateTextGeneral(t)){if(arrayAdditionalQuestion.length>0){for(var r=0;r<arrayAdditionalQuestion.length;r++)arrayAdditionalQuestion[r].key==a&&(arrayAdditionalQuestion[r].value=i,n=!1);1==n&&arrayAdditionalQuestion.push({key:a,value:i})}else arrayAdditionalQuestion.push({key:a,value:i});$(e).css("display","none"),$(t).empty();for(var o="",r=0;r<arrayAdditionalQuestion.length;r++)o+="key : "+arrayAdditionalQuestion[r].key+"\nvalue : "+arrayAdditionalQuestion[r].value+"\n";alert(o)}else validationMessage("Harap lengkapi form terlebih dahulu !.",null)})}function validateState(e){1==e?1==stateValidation&&(stateValidation=!0):1==stateValidation&&(stateValidation=!1)}function validationMessage(e,t){0==stateValidation?(alert(e),stateValidation=!0):null==e||alert(t)}function validateTextGeneral(e){return $(e).val().length>0?(validateState(!0),!0):(validateState(!1),!1)}function validateRadioButtonGeneral(e){return void 0!=$("input:radio[name="+e+"]:checked").val()?(validateState(!0),!0):(validateState(!1),!1)}function setBoxGeneral(e,t){for(var n=stringKres+e,a=0;a<t.length;a++)$(n+" tbody tr "+n+a).append(t[a])}function setTextGeneral(e,t){var n=stringKres+e;$(n).val(t)}function setLineGeneral(e,t){var n=stringKres+e;$(n).empty(),$(n).append(t)}function setRadioButtonGeneral(e,t){var n=$("input:radio[name="+e+"]");0==n.is(":checked")&&n.filter("[value="+t+"]").prop("checked",!0)}function setSelectForm(e,t){setTextGeneral(e,t)}function setSelectPDF(e,t){setBoxGeneral(e,t)}function setCheckboxGeneral(e,t){var n=$("input:checkbox[name="+e+"]");0==n.is(":checked")&&n.filter("[value="+t+"]").prop("checked",!0)}function setTextForm(e,t){setTextGeneral(e,t)}function setTextPDF(e,t){if(t.indexOf(stringSeparatorTelephone)>0)for(var n=t.split(stringSeparatorTelephone),a=[stringIDPrefix,stringIDInfix],i=0;i<n.length;i++)setBoxGeneral(e+a[i],n[i]);else{var r=stringKres+e;1==$(r).is("div")?setLineGeneral(e,t):setBoxGeneral(e,t)}}function setDateForm(e,t){setTextGeneral(e,t)}function setDatePDF(e,t){for(var n=[stringIDDay,stringIDMonth,stringIDYear],a=t.split(stringSeparatorDate),i=0;i<a.length;i++)setBoxGeneral(e+n[i],a[i])}function getBoxGeneral(e){var t=stringKres+e,n="";return $(t+" tbody tr td").each(function(){var e=$(this).text();e.length>0&&(n+=e)}),n}function getTextGeneral(e){var t=stringKres+e;return $(t).val()}function getRadioButtonGeneral(e){var t;return 0==validateRadioButtonGeneral(e)||(t=$("input:radio[name="+e+"]:checked").val()),t}function getSelectForm(e){return getTextGeneral(e)}function getSelectPDF(e){return getBoxGeneral(e)}function getCheckboxGeneral(e){var t;return 0==validateCheckboxGeneral(e)||(t=$("input:checkbox[name="+e+"]:checked").val()),t}function getTextForm(e){return getTextGeneral(e)}function getTextPDF(e){var t=($(e).val(),stringKres+e),n="";return 1==t.is("table")?(t+"Prefix").length>0?(n+=getBoxGeneral(t+"Prefix"),n+=stringSeparatorTelephone,n+=getBoxGeneral(t+"Infix")):n+=getBoxGeneral(t):n=$(t).text(),n}function getDateForm(e){return getTextGeneral(e)}function getDatePDF(e){return getBoxGeneral(e)}function getFromDatabase(e,t){for(var n=0;n<e.length;n++){var a=e[n].key,i=e[n].value;a.substring(0,4)==stringPrefixText?t==stringPageTypePDF?setTextForm(a,i):setTextPDF(a,i):a.substring(0,11)==stringPrefixRadioButton?setRadioButtonGeneral(a,i):a.substring(0,8)==stringPrefixCheckbox?setRadioCheckboxGeneral(a,i):a.substring(0,6)==stringPrefixSelect?t==stringPageTypePDF?setSelectForm(a,i):setSelectPDF(a,i):a.substring(0,4)==stringPrefixDate&&(t==stringPageTypePDF?setDateForm(a,i):setDatePDF(a,i))}}function setToDatabase(e){var t=[];return $("input").each(function(){var n,a=$(this).attr("id");"text"==$(this).attr("type")?(n=e==stringPageTypePDF?getTextForm(a):getTextPDF(a),t.push({key:a,value:n})):"radio"==$(this).attr("type")?(n=getRadioButtonGeneral(a),t.push({key:a,value:n})):"checkbox"==$(this).attr("type")?(n=setCheckboxGeneral(a),t.push({key:a,value:n})):"date"==$(this).attr("type")&&(e==stringPageTypePDF?getDateForm(a,n):getDatePDF(a,n),t.push({key:a,value:n}))}),$("select").each(function(){var n=$(this).attr("id");e==stringPageTypePDF?getSelectPDF(n):getSelectForm(n),t.push({key:stringKey,value:stringValue})}),t}function radioButtonMonitoring(e){$("input:radio[name="+e+"]").change(function(){var e;return $(this).is(":checked")&&(e=$(this).val()),e})}var directoryRoot="..",boxTypeWithBottomLabel="With bottom label",boxTypeWithoutLabel="Without label",labelDay="Hari",labelMonth="Bulan",labelYear="Tahun",sizeBox=20,arrayAdditionalQuestion=[],stringKey,stringRadioButtonSuffix="RadioButton",stringAdditionalQuestionSuffix="AdditionalQuestion",stringCheckboxSuffix="Checkbox",boxTypeStraight="Text",boxTypeDate="Date",boxTypeTelephone="Telephone",stringIDDay="Day",stringIDMonth="Month",stringIDYear="Year",stringIDPrefix="Prefix",stringIDInfix="Infix",stringIDSuffix="Suffix",stringIDLine="Line",stringKres="#",stringSeparatorDate="/",stringSeparatorTelephone="-",stateValidation=!0,stringPageTypePDF="PDF",stringPageTypeForm="Form",stringPrefixText="Text",stringPrefixRadioButton="RadioButton",stringPrefixCheckbox="Checkbox",stringPrefixDate="Date",stringPrefixSelect="Select";
