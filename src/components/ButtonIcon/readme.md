##### button icon base

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-regular-svg-icons');
    const {
        faSlidersH,
        faSignal,
        faRedo,
        faTimes,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon size="large" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon size="medium" icon={<FontAwesomeIcon icon={faSlidersH} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon size="small" icon={<FontAwesomeIcon icon={faSignal} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon size="x-small" icon={<FontAwesomeIcon icon={faRedo} />} />
        </div>
        <ButtonIcon size="xx-small" icon={<FontAwesomeIcon icon={faTimes} />} />
    </div>

##### button icon border

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-regular-svg-icons');
    const {
        faTrashAlt,
        faPencilAlt,
        faLocationArrow,
        faArrowDown,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="large" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="medium" icon={<FontAwesomeIcon icon={faLocationArrow} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="x-small" icon={<FontAwesomeIcon icon={faTrashAlt} />} />
        </div>
        <ButtonIcon variant="border" size="xx-small" icon={<FontAwesomeIcon icon={faArrowDown} />} />
    </div>

##### button icon filled

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-regular-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="brand" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <ButtonIcon variant="success" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>

##### button icon shaded

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-regular-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon shaded variant="border-filled" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon shaded variant="brand" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <ButtonIcon shaded variant="success" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>

##### button icon disabled

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-regular-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" disabled icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="brand" disabled icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <ButtonIcon disabled icon={<FontAwesomeIcon icon={faStar} />} />
    </div>

##### button icon inverse

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-regular-svg-icons');

    const buttonsIconContainerStyles = {
        borderRadius: '0.25rem',
    };

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center rainbow-background-color_dark-1 rainbow-border-radius_oval">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <ButtonIcon variant="inverse" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
