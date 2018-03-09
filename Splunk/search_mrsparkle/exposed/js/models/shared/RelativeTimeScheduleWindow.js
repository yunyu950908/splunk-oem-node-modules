define(
    [   
        'underscore',
        'models/Base',
        'util/time'
    ],
    function(
        _,
        BaseModel,
        timeUtils
    ) {
        var ONE_DAY = '-1d',
            SEVEN_DAYS = '-1w',
            ONE_MONTH = '-1mon',
            THREE_MONTHS = '-3mon',
            ONE_YEAR = '-1y',
            ALL_TIME = '0',
            CUSTOM = 'custom',
            NON_CUSTOM_VALUE_MAP = {};
            
        NON_CUSTOM_VALUE_MAP[ONE_DAY] = _('1 Day').t();
        NON_CUSTOM_VALUE_MAP[SEVEN_DAYS] = _('7 Days').t();
        NON_CUSTOM_VALUE_MAP[ONE_MONTH] = _('1 Month').t();
        NON_CUSTOM_VALUE_MAP[THREE_MONTHS] = _('3 Months').t();
        NON_CUSTOM_VALUE_MAP[ONE_YEAR] = _('1 Year').t();
        NON_CUSTOM_VALUE_MAP[ALL_TIME] = _('All Time').t();

        var RelativeTimeScheduleWindow = BaseModel.extend({
            initialize: function() {
                BaseModel.prototype.initialize.apply(this, arguments);
            },
            
            defaults: {
                schedule_window_option: ONE_DAY,
                custom_window: ONE_DAY
            },
            
            getScheduleWindow: function() {
                return this.isCustom() ? this.get('custom_window') : this.get('schedule_window_option');
            },
            
            getItems: function() {
                return [
                    {label: NON_CUSTOM_VALUE_MAP[ONE_DAY], value: ONE_DAY},
                    {label: NON_CUSTOM_VALUE_MAP[SEVEN_DAYS], value: SEVEN_DAYS},
                    {label: NON_CUSTOM_VALUE_MAP[ONE_MONTH], value: ONE_MONTH},
                    {label: NON_CUSTOM_VALUE_MAP[THREE_MONTHS], value: THREE_MONTHS},
                    {label: NON_CUSTOM_VALUE_MAP[ONE_YEAR], value: ONE_YEAR},
                    {label: NON_CUSTOM_VALUE_MAP[ALL_TIME], value: ALL_TIME},
                    {label: _('Custom').t(), value: CUSTOM}
                ];
            },
            
            isCustom: function() {
                return this.get('schedule_window_option') === CUSTOM;
            },
            
            setScheduleWindow: function(schedule_window) {
                if (NON_CUSTOM_VALUE_MAP[schedule_window]) {
                    this.set({
                        schedule_window_option: schedule_window,
                        custom_window: schedule_window
                    });
                } else {
                    this.set({
                        schedule_window_option: CUSTOM,
                        custom_window: schedule_window
                    });
                }
            }
        
        }, 
        {
            ONE_DAY: ONE_DAY,
            SEVEN_DAYS: SEVEN_DAYS,
            ONE_MONTH: ONE_MONTH,
            THREE_MONTHS: THREE_MONTHS,
            ONE_YEAR: ONE_YEAR,
            ALL_TIME: ALL_TIME,
            CUSTOM: CUSTOM,
            NON_CUSTOM_VALUE_MAP: NON_CUSTOM_VALUE_MAP
        });
        
        return RelativeTimeScheduleWindow;
    }
);
