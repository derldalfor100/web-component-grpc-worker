/// <reference lib="webworker" />
import * as Comlink from './../../../../node_modules/comlink/dist/esm/comlink';

class Fetch {

  private _baseUrl: string;
  private _defaultHeaders: any;
  private _defaultBody: any;

  constructor() {
      this._baseUrl = "";
      this._defaultHeaders = {};
      this._defaultBody = {};
  }

  getBaseUrl() {
      return this._baseUrl;
  }

  getDefaultHeaders() {
      return this._defaultHeaders;
  }

  getDefaultBody() {
      return this._defaultBody;
  }

  setBaseUrl(baseUrl: string) {
      this._baseUrl = baseUrl;
  }

  setDefaultHeaders(defaultHeaders: any) {
      this._defaultHeaders = defaultHeaders;
  }

  setDefaultBody(defaultBody: any) {
      this._defaultBody = defaultBody;
  }

  async get(endpoint = '') {
      const response = await fetch(this.getBaseUrl() + endpoint)
      const data = await response.json();
      return data;
  }

  async post(endpoint = '', body = undefined, headers = {}) {
      return await this._send('POST', endpoint, body, headers);
  }

  async put(endpoint = '', body = undefined, headers = {}) {
      return await this._send('PUT', endpoint, body, headers);
  }

  async delete(endpoint = '', body = undefined, headers = {}) {
      return await this._send('DELETE', endpoint, body, headers);
  }

  async _send(method: any, endpoint = '', body = undefined, headers = {}) {
      const response = await fetch(this.getBaseUrl() + endpoint, {
          method,
          headers: { ...this.getDefaultHeaders(), ...headers },
//@ts-ignore
          body: JSON.stringify({ ...this.getDefaultBody(), ...body })
      })
      const data = await response.json();
      return data;
  }
}

Comlink.expose({ Fetch }, self);
