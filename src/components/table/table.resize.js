import {$} from '@core/dom';

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const type = $resizer.data.resize;
    const sideProp = type === 'col' ? 'bottom' : 'right';
    let value;

    $resizer.css({
      [sideProp]: '-5000px',
    });

    document.onmousemove = e => {
      if (type === 'col') {
        const delta = e.pageX - coords.right;
        value = coords.width + delta;

        if (value < 41) {
          value = 40;

          $resizer.css({left: (value - 5) + 'px'});
        } else {
          $resizer.css({left: value + 'px'});
        }
      } else {
        const delta = e.pageY - coords.bottom;
        value = coords.height + delta;

        if (value < 21) {
          value = 20;

          $resizer.css({top: value + 'px'});
        } else {
          $resizer.css({top: value + 'px'});
        }
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;

      if (type === 'col') {
        $parent.css({width: value + 'px'});
        $root.findAll(`[data-col="${$parent.data.col}"]`)
            .forEach(el => el.style.width = value + 'px');
      } else {
        $parent.$el.style.height = value + 'px';
        $parent.css({height: value + 'px'});
      }

      resolve({
        value,
        type,
        id: $parent.data[type]
      });

      $resizer.css({
        left: '',
        [sideProp]: '',
        top: ''
      });
    };
  });
}
