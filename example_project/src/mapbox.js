import mapbox from "mapbox-gl";
import {MAPBOX_ACCESS_TOKEN, defaultToken} from "./token";
// https://docs.mapbox.com/help/glossary/access-token/
mapbox.accessToken = defaultToken;

const key = Symbol();

export { mapbox, key };