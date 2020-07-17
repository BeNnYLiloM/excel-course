import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.unsubscribers = [];
    this.store = options.store;

    this.prepare();
  }

  prepare() {
  }

  // Возвращает шаблон компонента
  toHTML() {
    return '';
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  storeChanged() {
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListener();
    this.unsubscribers.forEach(unsub => unsub());
  }

  isWatching(key) {
    return this.subscribe.includes(key);
  }
}
