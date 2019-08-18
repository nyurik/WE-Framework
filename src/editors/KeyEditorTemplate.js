import i18n from './i18n';

const editorDescription = {
  id: 'Key',
  linkText: i18n.keyLinkText,
  description: i18n.keyDescription,
  dialogTitle: i18n.keyDialogTitle,
  newEntityInstanceOf: 'Q2',
  recommendedClasses: [ 'Q2' ],
  tabs: [
    {
      label: i18n.tabGeneral,
      specials: [
        { type: 'LabelsAndDescriptionArea' },
      ],
      fieldsets: [
        {
          labelEntityId: 'Q19766' /* metadata (do not edit) */,
          fields: [
            { property: 'P2' } /* instance of */,
            { property: 'P16' } /* permanent key ID */,
          ],
        },
        {
          labelEntityId: 'P12' /* wikidata concept */,
          fields: [
            { property: 'P12' } /* wikidata concept */,
          ],
        },
      ],
    },
    {
      labelEntityId: 'P6' /* status */,
      fieldsets: [
        {
          labelEntityId: 'P6' /* status */,
          fields: [
            { property: 'P6' } /* status */,
          ],
        },
      ],
    },
    {
      labelEntityId: 'P28' /* image */,
      fieldsets: [
        {
          labelEntityId: 'P28' /* image */,
          fields: [
            { property: 'P28' } /* image */,
          ],
        },
      ],
    },
    {
      labelEntityId: 'Q19764' /* to be used on */,
      fieldsets: [
        {
          labelEntityId: 'P33' /* use on Nodes */,
          fields: [
            { property: 'P33' } /* use on Nodes */,
          ],
        },
        {
          labelEntityId: 'P34' /* use on Ways */,
          fields: [
            { property: 'P34' } /* use on Ways */,
          ],
        },
        {
          labelEntityId: 'P35' /* use on Areas */,
          fields: [
            { property: 'P35' } /* use on Areas */,
          ],
        },
        {
          labelEntityId: 'P36' /* use on Relations */,
          fields: [
            { property: 'P36' } /* use on Relations */,
          ],
        },
      ],
    },
    {
      labelEntityId: 'P25' /* group */,
      fieldsets: [
        {
          labelEntityId: 'P25' /* group */,
          fields: [
            { property: 'P25' } /* group */,
          ],
        },
      ],
    },
    {
      labelEntityId: 'P22' /* required keys & tags */,
      fieldsets: [
        {
          labelEntityId: 'P22' /* required keys & tags */,
          fields: [
            { property: 'P22' } /* required keys & tags */,
          ],
        },
      ],
    },
    {
      labelEntityId: 'P46' /* combinations */,
      fieldsets: [
        {
          labelEntityId: 'P46' /* combinations */,
          fields: [
            { property: 'P46' } /* combinations */,
          ],
        },
      ],
    },
    {
      labelEntityId: 'P31' /* documentation wiki pages (sitelinks) */,
      fieldsets: [
        {
          labelEntityId: 'P31' /* documentation wiki pages (sitelinks) */,
          fields: [
            { property: 'P31' } /* documentation wiki pages (sitelinks) */,
          ],
        },
      ],
    },
  ],
};

export default editorDescription;
