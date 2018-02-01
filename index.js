/* Convert country between different ISO formats
Author: Sashiraj Chan
Date Created: 24-Dec-2017
Last Edited: 11-Jan-2018
*/

var iso2 = ['TW','AF','AL','DZ','AS','AD','AO','AI','AQ',
'AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD',
'BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','VG','BN','BG','BF','BI','CV','KH','CM','CA','KY','CF','TD','CL','CN','HK','MO','CX','CC','CO','KM','CG','CK','CR','HR','CU','CW','CY','CZ','CI','KP','CD','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GG','GN','GW','GY','HT','HM','VA','HN','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE','KI','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','NF','MP','NO','OM','PK','PW','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','KR','MD','RO','RU','RW','RE','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','SX','SK','SI','SB','SO','ZA','GS','SS','ES','LK','PS','SD','SR','SJ','SZ','SE','CH','SY','TJ','TH','MK','TL','TG','TK','TO','TT','TN','TR','TM','TC','TV','UG','UA','AE','GB','TZ','UM','VI','US','UY','UZ','VU','VE','VN','WF','EH','YE','ZM','ZW','AX'];
var iso3 = ['TWN','AFG','ALB','DZA','ASM','AND','AGO','AIA','ATA',
'ATG','ARG','ARM','ABW','AUS','AUT','AZE','BHS','BHR','BGD',
'BRB','BLR','BEL','BLZ','BEN','BMU','BTN','BOL','BES','BIH','BWA','BVT','BRA','IOT','VGB','BRN','BGR','BFA','BDI','CPV','KHM','CMR','CAN','CYM','CAF','TCD','CHL','CHN','HKG','MAC','CXR','CCK','COL','COM','COG','COK','CRI','HRV','CUB','CUW','CYP','CZE','CIV','PRK','COD','DNK','DJI','DMA','DOM','ECU','EGY','SLV','GNQ','ERI','EST','ETH','FLK','FRO','FJI','FIN','FRA','GUF','PYF','ATF','GAB','GMB','GEO','DEU','GHA','GIB','GRC','GRL','GRD','GLP','GUM','GTM','GGY','GIN','GNB','GUY','HTI','HMD','VAT','HND','HUN','ISL','IND','IDN','IRN','IRQ','IRL','IMN','ISR','ITA','JAM','JPN','JEY','JOR','KAZ','KEN','KIR','KWT','KGZ','LAO','LVA','LBN','LSO','LBR','LBY','LIE','LTU','LUX','MDG','MWI','MYS','MDV','MLI','MLT','MHL','MTQ','MRT','MUS','MYT','MEX','FSM','MCO','MNG','MNE','MSR','MAR','MOZ','MMR','NAM','NRU','NPL','NLD','NCL','NZL','NIC','NER','NGA','NIU','NFK','MNP','NOR','OMN','PAK','PLW','PAN','PNG','PRY','PER','PHL','PCN','POL','PRT','PRI','QAT','KOR','MDA','ROU','RUS','RWA','REU','BLM','SHN','KNA','LCA','MAF','SPM','VCT','WSM','SMR','STP','SAU','SEN','SRB','SYC','SLE','SGP','SXM','SVK','SVN','SLB','SOM','ZAF','SGS','SSD','ESP','LKA','PSE','SDN','SUR','SJM','SWZ','SWE','CHE','SYR','TJK','THA','MKD','TLS','TGO','TKL','TON','TTO','TUN','TUR','TKM','TCA','TUV','UGA','UKR','ARE','GBR','TZA','UMI','VIR','USA','URY','UZB','VUT','VEN','VNM','WLF','ESH','YEM','ZMB','ZWE','ALA'];
var isoNum = ['158','004','008','012','016','020','024','660','010',
'028','032','051','533','036','040','031','044','048','050',
'052','112','056','084','204','060','064','068','535','070','072','074','076','086','092','096','100','854','108','132','116','120','124','136','140','148','152','156','344','446','162','166','170','174','178','184','188','191','192','531','196','203','384','408','180','208','262','212','214','218','818','222','226','232','233','231','238','234','242','246','250','254','258','260','266','270','268','276','288','292','300','304','308','312','316','320','831','324','624','328','332','334','336','340','348','352','356','360','364','368','372','833','376','380','388','392','832','400','398','404','296','414','417','418','428','422','426','430','434','438','440','442','450','454','458','462','466','470','584','474','478','480','175','484','583','492','496','499','500','504','508','104','516','520','524','528','540','554','558','562','566','570','574','580','578','512','586','585','591','598','600','604','608','612','616','620','630','634','410','498','642','643','646','638','652','654','659','662','663','666','670','882','674','678','682','686','688','690','694','702','534','703','705','090','706','710','239','728','724','144','275','729','740','744','748','752','756','760','762','764','807','626','768','772','776','780','788','792','795','796','798','800','804','784','826','834','581','850','840','858','860','548','862','704','876','732','887','894','716','248'];
var isoName = ["Taiwan","AFGHANISTAN","ALBANIA","ALGERIA","AMERICAN SAMOA","ANDORRA","ANGOLA","ANGUILLA","ANTARCTICA",
"ANTIGUA AND BARBUDA","ARGENTINA","ARMENIA","ARUBA","AUSTRALIA","AUSTRIA","AZERBAIJAN","BAHAMAS","BAHRAIN","BANGLADESH",
"BARBADOS","BELARUS","BELGIUM","BELIZE","BENIN","BERMUDA","BHUTAN","BOLIVIA (PLURINATIONAL STATE OF)","BONAIRE, SINT EUSTATIUS AND SABA","BOSNIA AND HERZEGOVINA","BOTSWANA","BOUVET ISLAND","BRAZIL","BRITISH INDIAN OCEAN TERRITORY","VIRGIN ISLANDS (BRITISH)","BRUNEI DARUSSALAM","BULGARIA","BURKINA FASO","BURUNDI","CABO VERDE","CAMBODIA","CAMEROON","CANADA","CAYMAN ISLANDS","CENTRAL AFRICAN REPUBLIC","CHAD","CHILE","CHINA","HONG KONG","MACAO","CHRISTMAS ISLAND","COCOS (KEELING) ISLANDS","COLOMBIA","COMOROS","CONGO","COOK ISLANDS","COSTA RICA","CROATIA","CUBA","CURAÇAO","CYPRUS","CZECHIA","CÔTE D'IVOIRE","KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)","CONGO (THE DEMOCRATIC REPUBLIC OF THE)","DENMARK","DJIBOUTI","DOMINICA","DOMINICAN REPUBLIC","ECUADOR","EGYPT","EL SALVADOR","EQUATORIAL GUINEA","ERITREA","ESTONIA","ETHIOPIA","Falkland Islands","FAROE ISLANDS","FIJI","FINLAND","FRANCE","FRENCH GUIANA","FRENCH POLYNESIA","FRENCH SOUTHERN TERRITORIES","GABON","GAMBIA","GEORGIA","GERMANY","GHANA","GIBRALTAR","GREECE","GREENLAND","GRENADA","GUADELOUPE","GUAM","GUATEMALA","GUERNSEY","GUINEA","GUINEA-BISSAU","GUYANA","HAITI","HEARD ISLAND AND MCDONALD ISLANDS","HOLY SEE","HONDURAS","HUNGARY","ICELAND","INDIA","INDONESIA","IRAN (ISLAMIC REPUBLIC OF)","IRAQ","IRELAND","ISLE OF MAN","ISRAEL","ITALY","JAMAICA","JAPAN","JERSEY","JORDAN","KAZAKHSTAN","KENYA","KIRIBATI","KUWAIT","KYRGYZSTAN","LAO PEOPLE’S DEMOCRATIC REPUBLIC","LATVIA","LEBANON","LESOTHO","LIBERIA","LIBYA","LIECHTENSTEIN","LITHUANIA","LUXEMBOURG","MADAGASCAR","MALAWI","MALAYSIA","MALDIVES","MALI","MALTA","MARSHALL ISLANDS","MARTINIQUE","MAURITANIA","MAURITIUS","MAYOTTE","MEXICO","MICRONESIA (FEDERATED STATES OF)","MONACO","MONGOLIA","MONTENEGRO","MONTSERRAT","MOROCCO","MOZAMBIQUE","MYANMAR","NAMIBIA","NAURU","NEPAL","NETHERLANDS","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NIGER","NIGERIA","NIUE","NORFOLK ISLAND","NORTHERN MARIANA ISLANDS","NORWAY","OMAN","PAKISTAN","PALAU","PANAMA","PAPUA NEW GUINEA","PARAGUAY","PERU","PHILIPPINES","PITCAIRN","POLAND","PORTUGAL","PUERTO RICO","QATAR","KOREA (THE REPUBLIC OF)","MOLDOVA (THE REPUBLIC OF)","ROMANIA","RUSSIAN FEDERATION","RWANDA","RÉUNION","SAINT BARTHÉLEMY","SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA","SAINT KITTS AND NEVIS","SAINT LUCIA","SAINT MARTIN (FRENCH PART)","SAINT PIERRE AND MIQUELON","SAINT VINCENT AND THE GRENADINES","SAMOA","SAN MARINO","SAO TOME AND PRINCIPE","SAUDI ARABIA","SENEGAL","SERBIA","SEYCHELLES","SIERRA LEONE","SINGAPORE","SINT MAARTEN (DUTCH PART)","SLOVAKIA","SLOVENIA","SOLOMON ISLANDS","SOMALIA","SOUTH AFRICA","SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS","SOUTH SUDAN","SPAIN","SRI LANKA","PALESTINE, STATE OF","SUDAN","SURINAME","SVALBARD AND JAN MAYEN","SWAZILAND","SWEDEN","SWITZERLAND","SYRIAN ARAB REPUBLIC","TAJIKISTAN","THAILAND","MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)","TIMOR-LESTE","TOGO","TOKELAU","TONGA","TRINIDAD AND TOBAGO","TUNISIA","TURKEY","TURKMENISTAN","TURKS AND CAICOS ISLANDS","TUVALU","UGANDA","UKRAINE","UNITED ARAB EMIRATES","UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND","TANZANIA, UNITED REPUBLIC OF","UNITED STATES MINOR OUTLYING ISLANDS","VIRGIN ISLANDS (U.S.)","UNITED STATES OF AMERICA","URUGUAY","UZBEKISTAN","VANUATU","VENEZUELA (BOLIVARIAN REPUBLIC OF)","VIET NAM","WALLIS AND FUTUNA","WESTERN SAHARA","YEMEN","ZAMBIA","ZIMBABWE","ÅLAND ISLANDS"];

function checkLength2(val){
    if(val.length == 2) return true;
    else return false;
}

function checkLength3(val){
    if(val.length == 3) return true;
    else return false;
}

exports.ISO2toISO3 = function(val){
    if(checkLength2(val) && (typeof(val)=="string")){
        if(iso2.indexOf(val) != "-1")
        return iso3[iso2.indexOf(val)];
        else return "Invalid Country";
    }
    else return "Invalid Input";
}

exports.ISO2toName = function(val){
    if(checkLength2(val) && (typeof(val)=="string")){
        if(iso2.indexOf(val) != "-1")
        return isoName[iso2.indexOf(val)];
        else return "Invalid Country";
    }
    else return "Invalid Input";
}

exports.ISO2toNum = function(val){
    if(checkLength2(val) && (typeof(val)=="string")){
        if(iso2.indexOf(val) != "-1")
        return isoNum[iso2.indexOf(val)];
        else return "Invalid Country";
    }
    else return "Invalid Input";
}

exports.ISO3toISO2 = function(val){
    if(checkLength3(val) && (typeof(val)=="string")){
        if(iso3.indexOf(val) != "-1")
        return iso2[iso3.indexOf(val)];
        else return "Invalid Country";
    }
    else return "Invalid Input";
}

exports.ISO3toNum = function(val){  
    if(checkLength3(val) && (typeof(val)=="string")){
        if(iso3.indexOf(val) != "-1")
        return isoNum[iso3.indexOf(val)];
        else return "Invalid Country";
    }
    else return "Invalid Input";
}

exports.ISO3toName = function(val){
    if(checkLength3(val) && (typeof(val)=="string")){
        if(iso3.indexOf(val) != "-1")
        return isoName[iso3.indexOf(val)];
        else return "Invalid Country";
    }
    else return "Invalid Input";
}

exports.ISONumtoISO2 = function(val){
    if (Number.isInteger(parseInt(val))){
        if(isoNum.indexOf(val) != "-1")
        return iso2[isoNum.indexOf(val)];
        else return "Invalid Country Code";
    }
    else return "Provide a valid country code to convert to ISO2 country code";
}

exports.ISONumtoISO3 = function(val){
    if (Number.isInteger(parseInt(val))){
        if (isoNum.indexOf(val) != "-1")
        return iso3[isoNum.indexOf(val)];
        else return "Invalid Country Code";
    }
    else return "Provide a valid country code to convert to ISO2 country code";
}

exports.ISONumtoName = function(val){
    if (Number.isInteger(parseInt(val))){
        if (isoNum.indexOf(val) != '-1')
        return isoName[isoNum.indexOf(val)];
        else return "Invalid Country Code";
    }
    else return "Provide a valid country code to convert to Name";
}

exports.ISONametoNum = function(val){
    if(typeof(val)=="string"){
    if (isoName.indexOf(val) != '-1')
    return isoNum[isoName.indexOf(val)];
    else return "Invalid country";
    }else return "Invalid input";
}

exports.ISONametoISO2 = function(val){
    if(typeof(val)=="string"){
    if (isoName.indexOf(val) != '-1')
    return iso2[isoName.indexOf(val)];
    else return "Invalid country";
    }else return "Invalid input";
}

exports.ISONametoISO3 = function(val){
    if(typeof(val)=="string"){
    if (isoName.indexOf(val) != '-1')
    return iso3[isoName.indexOf(val)];
    else return "Invalid country";
    }else return "Invalid input";
}