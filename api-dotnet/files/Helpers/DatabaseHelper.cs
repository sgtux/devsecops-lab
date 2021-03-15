using System;
using Npgsql;

namespace FakebookApi.Helpers
{
    public class DatabaseHelper
    {
        public static T GetValueOrNull<T>(NpgsqlDataReader reader, string columnName)
        {
            var columnValue = reader[columnName];
            if (columnValue is DBNull)
                return default(T);
            return (T)columnValue;
        }
    }
}