/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {TAny} from "@site/src/typings/common";

export default function FooterCopyright({copyright}: TAny): JSX.Element {
    return (
        <div
            className="footer__copyright"
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: copyright}}
        />
    );
}
