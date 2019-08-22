import { localize } from 'utils/I18nUtils';

const en = {

  keyLinkText: 'Key',
  keyDescription: 'OpenStreetMap data key',
  keyDialogTitle: 'OpenStreetMap data key',

  tagLinkText: 'Tag',
  tagDescription: 'OpenStreetMap key=value combination',
  tagDialogTitle: 'OpenStreetMap key=value combination',

  tabMetadata: 'Metadata (readonly)',

  tabGeneral: 'general',
  tabMedia: 'media',
};

const fr = {
  tabGeneral: 'général',
  tabMedia: 'images, sons et vidéos',
};

const ru = {
  tabGeneral: 'основное',
  tabMedia: 'медиа',
};

const translations = { en, fr, ru };
const result = localize( {}, translations );
export default result;
