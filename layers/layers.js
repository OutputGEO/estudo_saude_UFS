var wms_layers = [];


        var lyr_MapabaseLimitesevias_0 = new ol.layer.Tile({
            'title': 'Mapa base (Limites e vias)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1 = new ol.format.GeoJSON();
var features_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1 = format_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1.readFeatures(json_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1.addFeatures(features_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1);
var lyr_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1, 
                style: style_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1,
                popuplayertitle: "Municípios de Sergipe segundo Qtde de Estabs CNES",
                interactive: true,
    title: 'Municípios de Sergipe segundo Qtde de Estabs CNES<br />\
    <img src="styles/legend/MunicpiosdeSergipesegundoQtdedeEstabsCNES_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/MunicpiosdeSergipesegundoQtdedeEstabsCNES_1_1.png" /> 5 - 18<br />\
    <img src="styles/legend/MunicpiosdeSergipesegundoQtdedeEstabsCNES_1_2.png" /> 18 - 41<br />\
    <img src="styles/legend/MunicpiosdeSergipesegundoQtdedeEstabsCNES_1_3.png" /> 41 - 108<br />\
    <img src="styles/legend/MunicpiosdeSergipesegundoQtdedeEstabsCNES_1_4.png" /> 108 - 2743<br />'
        });
var format_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2 = new ol.format.GeoJSON();
var features_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2 = format_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2.readFeatures(json_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2.addFeatures(features_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2);
var lyr_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2, 
                style: style_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2,
                popuplayertitle: "Estabelecimentos de Saúde Públicos ou Sem Fins Lucrativos (CNES, abr/2024)",
                interactive: true,
                title: '<img src="styles/legend/EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2.png" /> Estabelecimentos de Saúde Públicos ou Sem Fins Lucrativos (CNES, abr/2024)'
            });

lyr_MapabaseLimitesevias_0.setVisible(true);lyr_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1.setVisible(true);lyr_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2.setVisible(true);
var layersList = [lyr_MapabaseLimitesevias_0,lyr_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1,lyr_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2];
lyr_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'NUMPOINTS': 'NUMPOINTS', 'CODMUN6': 'CODMUN6', });
lyr_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2.set('fieldAliases', {'ANO': 'ANO', 'COMPETÊNC': 'COMPETÊNC', 'COMPETÊ_1': 'COMPETÊ_1', 'COMPETÊ_2': 'COMPETÊ_2', 'MACROREGI': 'MACROREGI', 'UF': 'UF', 'CÓDIGO_DO': 'CÓDIGO_DO', 'MUNICÍPIO': 'MUNICÍPIO', 'CNES': 'CNES', 'NOME_FANTA': 'NOME_FANTA', 'RAZÃO_SOC': 'RAZÃO_SOC', 'CNPJ_DO_ES': 'CNPJ_DO_ES', 'CNPJ_DA_MA': 'CNPJ_DA_MA', 'ATIVIDADE': 'ATIVIDADE', 'ATENDIMENT': 'ATENDIMENT', 'TIPO_DO_ES': 'TIPO_DO_ES', 'SUBTIPO_DO': 'SUBTIPO_DO', 'TIPO_NOVO': 'TIPO_NOVO', 'NATUREZA_J': 'NATUREZA_J', 'NATUREZA_1': 'NATUREZA_1', 'GESTÃO': 'GESTÃO', 'CONVÊNIO': 'CONVÊNIO', 'NÍVEL_DE': 'NÍVEL_DE', 'TURNO_DE_A': 'TURNO_DE_A', 'LEITOS_EXI': 'LEITOS_EXI', 'LEITOS_SUS': 'LEITOS_SUS', 'STATUS_DO': 'STATUS_DO', 'LOGRADOURO': 'LOGRADOURO', 'COMPLEMENT': 'COMPLEMENT', 'TELEFONE': 'TELEFONE', 'CEP': 'CEP', 'BAIRRO': 'BAIRRO', 'E_MAIL': 'E_MAIL', 'DIRETOR_RE': 'DIRETOR_RE', 'DATA_DO_CA': 'DATA_DO_CA', 'DATA_DE_DE': 'DATA_DE_DE', 'location': 'location', 'location_X': 'location_X', 'location_Y': 'location_Y', });
lyr_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'CODMUN6': 'TextEdit', });
lyr_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2.set('fieldImages', {'ANO': 'TextEdit', 'COMPETÊNC': 'TextEdit', 'COMPETÊ_1': 'TextEdit', 'COMPETÊ_2': 'TextEdit', 'MACROREGI': 'TextEdit', 'UF': 'TextEdit', 'CÓDIGO_DO': 'TextEdit', 'MUNICÍPIO': 'TextEdit', 'CNES': 'TextEdit', 'NOME_FANTA': 'TextEdit', 'RAZÃO_SOC': 'TextEdit', 'CNPJ_DO_ES': 'TextEdit', 'CNPJ_DA_MA': 'TextEdit', 'ATIVIDADE': 'TextEdit', 'ATENDIMENT': 'TextEdit', 'TIPO_DO_ES': 'TextEdit', 'SUBTIPO_DO': 'TextEdit', 'TIPO_NOVO': 'TextEdit', 'NATUREZA_J': 'TextEdit', 'NATUREZA_1': 'TextEdit', 'GESTÃO': 'TextEdit', 'CONVÊNIO': 'TextEdit', 'NÍVEL_DE': 'TextEdit', 'TURNO_DE_A': 'TextEdit', 'LEITOS_EXI': 'TextEdit', 'LEITOS_SUS': 'TextEdit', 'STATUS_DO': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'COMPLEMENT': 'TextEdit', 'TELEFONE': 'TextEdit', 'CEP': 'TextEdit', 'BAIRRO': 'TextEdit', 'E_MAIL': 'TextEdit', 'DIRETOR_RE': 'TextEdit', 'DATA_DO_CA': 'DateTime', 'DATA_DE_DE': 'TextEdit', 'location': 'TextEdit', 'location_X': 'TextEdit', 'location_Y': 'TextEdit', });
lyr_MunicpiosdeSergipesegundoQtdedeEstabsCNES_1.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', 'NUMPOINTS': 'inline label - visible with data', 'CODMUN6': 'hidden field', });
lyr_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2.set('fieldLabels', {'ANO': 'hidden field', 'COMPETÊNC': 'hidden field', 'COMPETÊ_1': 'hidden field', 'COMPETÊ_2': 'hidden field', 'MACROREGI': 'hidden field', 'UF': 'hidden field', 'CÓDIGO_DO': 'inline label - visible with data', 'MUNICÍPIO': 'inline label - visible with data', 'CNES': 'inline label - visible with data', 'NOME_FANTA': 'inline label - visible with data', 'RAZÃO_SOC': 'inline label - visible with data', 'CNPJ_DO_ES': 'hidden field', 'CNPJ_DA_MA': 'hidden field', 'ATIVIDADE': 'hidden field', 'ATENDIMENT': 'hidden field', 'TIPO_DO_ES': 'inline label - visible with data', 'SUBTIPO_DO': 'hidden field', 'TIPO_NOVO': 'hidden field', 'NATUREZA_J': 'hidden field', 'NATUREZA_1': 'hidden field', 'GESTÃO': 'inline label - visible with data', 'CONVÊNIO': 'hidden field', 'NÍVEL_DE': 'hidden field', 'TURNO_DE_A': 'hidden field', 'LEITOS_EXI': 'hidden field', 'LEITOS_SUS': 'inline label - visible with data', 'STATUS_DO': 'hidden field', 'LOGRADOURO': 'inline label - visible with data', 'COMPLEMENT': 'inline label - visible with data', 'TELEFONE': 'hidden field', 'CEP': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'E_MAIL': 'hidden field', 'DIRETOR_RE': 'hidden field', 'DATA_DO_CA': 'hidden field', 'DATA_DE_DE': 'inline label - visible with data', 'location': 'hidden field', 'location_X': 'hidden field', 'location_Y': 'hidden field', });
lyr_EstabelecimentosdeSadePblicosouSemFinsLucrativosCNESabr2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});