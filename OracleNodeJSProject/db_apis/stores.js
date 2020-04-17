const database = require('../services/database.js');

const baseQuery =
    `SELECT
    ps.store_id            "store_id",
    ps.country_code        "country_code",
    ps.short_name          "short_name",
    ps.name                "store_name",
    ps.description         "description",
    to_char(ps.start_date, 'DD/MM/RRRR') "start_date",
    to_char(ps.end_date, 'DD/MM/RRRR') "end_date",
    ps.enabled_flag        "enabled_flag",
    ps.created_by          "created_by",
    to_char(ps.creation_date, 'DD/MM/RRRR') "creation_date",
    to_char(ps.last_update_date, 'DD/MM/RRRR') "last_update_date",
    ps.last_updated_by     "last_updated_by",
    ps.object_version_id   "object_version_id"
FROM
    pos_stores ps`;

async function find(context) {
    let query = baseQuery;
    const binds = {};
    if (context.id) {
        binds.store_id = context.id;
        query += `\nwhere store_id = :store_id`;
    }
    const result = await database.simpleExecute(query, binds);
    return result.rows;
}

module.exports.find = find;