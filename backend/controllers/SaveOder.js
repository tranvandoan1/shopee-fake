import Saveoder from '../modoles/SaveOder';
import _ from 'lodash';
import formidable from 'formidable';
export const create = (req, res) => {
    const saveoder = new Saveoder(req.body);
    saveoder.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Không thêm được sp oder"
            })
        }
        res.json(data)
    })

}

export const saveoderId = (req, res, next, id) => {
    Saveoder.findById(id).exec((err, saveoder) => {
        if (err || !saveoder) {
            res.status(400).json({
                error: "Không tìm thấy sp oder"
            })
        }
        req.saveoder = saveoder;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.saveoder);
}

export const remove = (req, res) => {
    let saveoder = req.saveoder;
    saveoder.remove((err, saveoder) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được sp oder"
            })
        }
        res.json({
            saveoder,
            message: "Sp oder đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {

    Saveoder.find((err, data) => {
        if (err) {
            error: "Không tìm thấy sp oder"
        }
        res.json(data)
    })

}

export const update = (req, res) => {
    const form = formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        let saveoder = req.saveoder;
        saveoder = _.assignIn(saveoder, fields);

        saveoder.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không sửa được oder"
                })
            }
            res.json(data)
        })

    })

}