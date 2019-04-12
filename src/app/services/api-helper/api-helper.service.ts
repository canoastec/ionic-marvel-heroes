import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  // https://superheroapi.com/api/{{token}}/{{id}}/powerstats
  private urlBase = 'https://gateway.marvel.com:443/v1/public';
  // private searchUrl = '/characters';

  private charactersUrl = '/characters';
  private characterUrl = '/characters/{id}';
  private characterComicsUrl = '/characters/{id}/comics';
  private characterEventsUrl = '/characters/{id}/events';
  private characterSeriesUrl = '/characters/{id}/series';
  private characterStoriesUrl = '/characters/{id}/stories';
  private comicsUrl = '/comics';
  private comicUrl = '/comics/{id}';
  private comicCharactersUrl = '/comics/{id}/characters';
  private comicCreatorsUrl = '/comics/{id}/creators';
  private comicEventsUrl = '/comics/{id}/events';
  private comicStoriesUrl = '/comics/{id}/stories';
  private creatorsUrl = '/creators';
  private creatorUrl = '/creators/{id}';
  private creatorComicsUrl = '/creators/{id}/comics';
  private creatorEventsUrl = '/creators/{id}/events';
  private creatorSeriesUrl = '/creators/{id}/series';
  private creatorStoriesUrl = '/creators/{id}/stories';
  private eventsUrl = '/events';
  private eventUrl = '/events/{id}';
  private eventCharactersUrl = '/events/{id}/characters';
  private eventComicsUrl = '/events/{id}/comics';
  private eventCreatorsUrl = '/events/{id}/creators';
  private eventSeriesUrl = '/events/{id}/series';
  private eventStoriesUrl = '/events/{id}/stories';
  private seriesUrl = '/series';
  private serieUrl = '/series/{id}';
  private serieCharactersUrl = '/series/{id}/characters';
  private serieComicsUrl = '/series/{id}/comics';
  private serieCreatorsUrl = '/series/{id}/creators';
  private serieEventsUrl = '/series/{id}/events';
  private serieStoriesUrl = '/series/{id}/stories';
  private storiesUrl = '/stories';
  private storyUrl = '/stories/{id}';
  private storyCharactersUrl = '/stories/{id}/characters';
  private storyComicsUrl = '/stories/{id}/comics';
  private storyCreatorsUrl = '/stories/{id}/creators';
  private storyEventsUrl = '/stories/{id}/events';
  private storySeriesUrl = '/stories/{id}/series';

  constructor() {}

  /**
   * @param name - return only characters matching the specified full character name (e.g. Spider-Man).
   * @param nameStartsWith - Return characters with names that begin with the specified string (e.g. Sp).
   * @param modifiedSince - Return only characters which have been modified since the specified date.
   * @param comics - Return only characters which appear in the specified comics (accepts a comma-separated list of ids).
   * @param series - Return only characters which appear the specified series (accepts a comma-separated list of ids).
   * @param events - Return only characters which appear in the specified events (accepts a comma-separated list of ids).
   * @param stories - Return only characters which appear the specified stories (accepts a comma-separated list of ids).
   * @param orderBy - Order the result set by a field or fields. Add a '-' to the value sort in descending order. Multiple values are given
   * priority in the order in which they are passed.
   * @param limit - Limit the result set to the specified number of resources.
   * @param offset - Skip the specified number of resources in the result set.
   * @returns JSON like this:
   * { 'code': 'int','status': 'string','copyright': 'string','attributionText': 'string','attributionHTML': 'string',
        'data': {
            'offset': 'int','limit': 'int','total': 'int','count': 'int',
            'results': [{
                'id': 'int','name': 'string','description': 'string','modified': 'Date','resourceURI': 'string',
                'urls': [{'type': 'string','url': 'string'}],
                'thumbnail': {'path': 'string','extension': 'string'},
                'comics': {'available': 'int','returned': 'int','collectionURI': 'string','items': [{'resourceURI': 'string','name': 'string'}]},
                'stories': {'available': 'int','returned': 'int','collectionURI': 'string','items': [{'resourceURI': 'string','name': 'string','type': 'string'}]},
                'events': {'available': 'int','returned': 'int','collectionURI': 'string','items': [{'resourceURI': 'string','name': 'string'}]},
                'series': {'available': 'int','returned': 'int','collectionURI': 'string','items': [{'resourceURI': 'string','name': 'string'}]}
            }]
        },
        'etag': 'string'
        }
   */
  public getCharactersUrl(offset?: number) {
    return this.urlBase + this.charactersUrl + '?offset=' + offset;
  }

  public getCharacterUrl(id) {
    return this.urlBase + this.characterUrl.replace('{id}', id);
  }

  public getCharacterComicsUrl(id) {
    return this.urlBase + this.characterComicsUrl.replace('{id}', id);
  }

  public getCharacterEventsUrl(id) {
    return this.urlBase + this.characterEventsUrl.replace('{id}', id);
  }

  public getCharacterSeriesUrl(id) {
    return this.urlBase + this.characterSeriesUrl.replace('{id}', id);
  }

  public getCharacterStoriesUrl(id) {
    return this.urlBase + this.characterStoriesUrl.replace('{id}', id);
  }

  public getComicsUrl() {
    return this.urlBase + this.comicsUrl;
  }

  public getComicUrl(id) {
    return this.urlBase + this.comicUrl.replace('{id}', id);
  }

  public getComicCharactersUrl(id) {
    return this.urlBase + this.comicCharactersUrl.replace('{id}', id);
  }

  public getComicCreatorsUrl(id) {
    return this.urlBase + this.comicCreatorsUrl.replace('{id}', id);
  }

  public getComicEventsUrl(id) {
    return this.urlBase + this.comicEventsUrl.replace('{id}', id);
  }

  public getComicStoriesUrl(id) {
    return this.urlBase + this.comicStoriesUrl.replace('{id}', id);
  }

  public getCreatorsUrl(id) {
    return this.urlBase + this.creatorsUrl.replace('{id}', id);
  }

  public getCreatorUrl(id) {
    return this.urlBase + this.creatorUrl.replace('{id}', id);
  }

  public getCreatorComicsUrl(id) {
    return this.urlBase + this.creatorComicsUrl.replace('{id}', id);
  }

  public getCreatorEventsUrl(id) {
    return this.urlBase + this.creatorEventsUrl.replace('{id}', id);
  }

  public getCreatorSeriesUrl(id) {
    return this.urlBase + this.creatorSeriesUrl.replace('{id}', id);
  }

  public getCreatorStoriesUrl(id) {
    return this.urlBase + this.creatorStoriesUrl.replace('{id}', id);
  }

  public getEventsUrl() {
    return this.urlBase + this.eventsUrl;
  }

  public getEventUrl(id) {
    return this.urlBase + this.eventUrl.replace('{id}', id);
  }

  public getEventCharactersUrl(id) {
    return this.urlBase + this.eventCharactersUrl.replace('{id}', id);
  }

  public getEventComicsUrl(id) {
    return this.urlBase + this.eventComicsUrl.replace('{id}', id);
  }

  public getEventCreatorsUrl(id) {
    return this.urlBase + this.eventCreatorsUrl.replace('{id}', id);
  }

  public getEventSeriesUrl(id) {
    return this.urlBase + this.eventSeriesUrl.replace('{id}', id);
  }

  public getEventStoriesUrl(id) {
    return this.urlBase + this.eventStoriesUrl.replace('{id}', id);
  }

  public getSeriesUrl() {
    return this.urlBase + this.seriesUrl;
  }

  public getSerieUrl(id) {
    return this.urlBase + this.serieUrl.replace('{id}', id);
  }

  public getSerieCharactersUrl(id) {
    return this.urlBase + this.serieCharactersUrl.replace('{id}', id);
  }

  public getSerieComicsUrl(id) {
    return this.urlBase + this.serieComicsUrl.replace('{id}', id);
  }

  public getSerieCreatorsUrl(id) {
    return this.urlBase + this.serieCreatorsUrl.replace('{id}', id);
  }

  public getSerieEventsUrl(id) {
    return this.urlBase + this.serieEventsUrl.replace('{id}', id);
  }

  public getSerieStoriesUrl(id) {
    return this.urlBase + this.serieStoriesUrl.replace('{id}', id);
  }

  public getStoriesUrl() {
    return this.urlBase + this.storiesUrl;
  }

  public getStoryUrl(id) {
    return this.urlBase + this.storyUrl.replace('{id}', id);
  }

  public getStoryCharactersUrl(id) {
    return this.urlBase + this.storyCharactersUrl.replace('{id}', id);
  }

  public getStoryComicsUrl(id) {
    return this.urlBase + this.storyComicsUrl.replace('{id}', id);
  }

  public getStoryCreatorsUrl(id) {
    return this.urlBase + this.storyCreatorsUrl.replace('{id}', id);
  }

  public getStoryEventsUrl(id) {
    return this.urlBase + this.storyEventsUrl.replace('{id}', id);
  }

  public getStorySeriesUrl(id) {
    return this.urlBase + this.storySeriesUrl.replace('{id}', id);
  }
}
