import i18n from './i18n';

const editorDescription = {
  id: 'Tag',
  linkText: i18n.tagLinkText,
  description: i18n.tagDescription,
  dialogTitle: i18n.tagDialogTitle,
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
          fields: [
            { property: 'P6' } /* status */,
            { property: 'P28' } /* image */,
          ],
        },
        {
          fields: [
            { property: 'P33' } /* use on nodes */,
            { property: 'P34' } /* use on ways */,
            { property: 'P35' } /* use on areas */,
            { property: 'P36' } /* use on relations */,
          ],
        },
        {
          fields: [
            { property: 'P25' } /* group */,
            { property: 'P12' } /* wikidata concept */,
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
            {
              fields: [
                { property: 'P22' } /* required keys & tags */,
              ],
            },
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
            {
              fields: [
                { property: 'P46' } /* combinations */,
              ],
            },
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
            {
              fields: [
                { property: 'P31' } /* documentation wiki pages (sitelinks) */,
              ],
            },
          ],
        },
      ],
    },
    {
      label: i18n.tabMetadata,
      fieldsets: [
        {
          fields: [
            {
              fields: [
                { property: 'P2' } /* instance of */,
                { property: 'P19' } /* key as a string */,
                { property: 'P10' } /* key for this tag */,
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default editorDescription;
